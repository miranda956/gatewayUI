// APIContext.js
import React, { createContext, useContext, useReducer } from "react";
import { apiReducer } from "../reducers/apiReducer";
const API_BASE_URL = "https://your-api-url.com";

const initialState = {};

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const sendRequest = async (url, options) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  const fetchEntities = async (entityType) => {
    const url = `${API_BASE_URL}/${entityType}`;
    const data = await sendRequest(url);
    dispatch({ type: "FETCH_SUCCESS", entityType, data });
    return data;
  };

  const createEntity = async (entityType, newData) => {
    const url = `${API_BASE_URL}/${entityType}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    };
    const createdEntity = await sendRequest(url, options);
    dispatch({ type: "CREATE_SUCCESS", entityType, createdEntity });
    return createdEntity;
  };

  // Similarly, updateEntity and deleteEntity methods should dispatch appropriate actions.
  const deleteEntity = async (entityType, entityId) => {
    const url = `${API_BASE_URL}/${entityType}/${entityId}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const deletedEntity = await sendRequest(url, options);
    dispatch({ type: "DELETE_SUCCESS", entityType, entityId });
    return deletedEntity;
  };

  const updateEntity = async (entityType, entityId, updatedData) => {
    const url = `${API_BASE_URL}/${entityType}/${entityId}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    };
    const updatedEntity = await sendRequest(url, options);
    dispatch({ type: "UPDATE_SUCCESS", entityType, entityId, updatedData });
    return updatedEntity;
  };
  return (
    <ApiContext.Provider
      value={{
        state,
        fetchEntities,
        createEntity,
        deleteEntity,
        updateEntity,
      }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw Error("useAPIContext is not within scope");
  }
  return context;
};
