const API_URL = 'http://localhost:3001/api';

export const showAllPerson= async () => {
  try {
    const response= await fetch(`${API_URL}/person`);
    const data= await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const showOnePerson= async (id) => {
  try {
    const response= await fetch(`${API_URL}/person/${id}`);
    const data= await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const addPerson= async (person) => {
  const payload ={
    method: "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(person)
  }
  try {
    const response= await fetch(`${API_URL}/person`, payload);
    const data= await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUser= async (id, person) => {
  const payload ={
    method: "PATCH",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(person)
  }
  try {
    const response= await fetch(`${API_URL}/person/${id}`, payload);
    const data= await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUser= async (id) => {
  const payload ={method: "DELETE"}
  try {
    const response= await fetch(`${API_URL}/person/${id}`, payload);
    const data= await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
