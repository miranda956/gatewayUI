// useApi.js
import { useState } from "react";
import { fetchEntities, createEntity, updateEntity, deleteEntity } from "../apis/apis";

export const useApi = (entityType) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const result = await fetchEntities(entityType);
      setData(result);
    } catch (error) {
      console.error(`Error fetching ${entityType}:`, error);
      setError(error);
    }
  };

  const createData = async (newData) => {
    try {
      const createdEntity = await createEntity(entityType, newData);
      setData((prevData) => [...prevData, createdEntity]);
    } catch (error) {
      console.error(`Error creating ${entityType}:`, error);
      setError(error);
    }
  };

  const updateData = async (entityId, updatedData) => {
    try {
      await updateEntity(entityType, entityId, updatedData);
      setData((prevData) => prevData.map((entity) => (entity.id === entityId ? { ...entity, ...updatedData } : entity)));
    } catch (error) {
      console.error(`Error updating ${entityType}:`, error);
      setError(error);
    }
  };

  const deleteData = async (entityId) => {
    try {
      await deleteEntity(entityType, entityId);
      setData((prevData) => prevData.filter((entity) => entity.id !== entityId));
    } catch (error) {
      console.error(`Error deleting ${entityType}:`, error);
      setError(error);
    }
  };

  return { data, error, fetchData, createData, updateData, deleteData };
};
