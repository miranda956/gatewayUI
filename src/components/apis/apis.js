// api.js

const API_BASE_URL = "https://your-api-url.com";

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

export const fetchEntities = async (entityType) => {
  const url = `${API_BASE_URL}/${entityType}`;
  return sendRequest(url);
};

export const createEntity = async (entityType, newData) => {
  const url = `${API_BASE_URL}/${entityType}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  };
  return sendRequest(url, options);
};

export const updateEntity = async (entityType, entityId, updatedData) => {
  const url = `${API_BASE_URL}/${entityType}/${entityId}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  };
  return sendRequest(url, options);
};

export const deleteEntity = async (entityType, entityId) => {
  const url = `${API_BASE_URL}/${entityType}/${entityId}`;
  const options = {
    method: "DELETE",
  };
  return sendRequest(url, options);
};
