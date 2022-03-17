const API_URL = 'http://localhost:3001/api';
export async function getAllTodos() {
    try {
        const response= await fetch(`${API_URL}/todo`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

export async function createTodo(todo) {
  const payload ={
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringifty(todo),
  }
  try {
    const response= await fetch(`${API_URL}/todo`,payload);
    const data = response.json();
    return data;
} catch (error) {
    throw new Error(error);
}
}

export async function updateTodo(id, todo) {
  const payload ={
    method: 'PATCH',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringifty(todo),
  }
  try {
    const response= await fetch(`${API_URL}/todo/${id}`,payload);
    const data = response.json();
    return data;
} catch (error) {
    throw new Error(error);
}
}

export async function deleteTodo(id) {
  const payload ={
    method: 'DELETE',
  }
  try {
    const response= await fetch(`${API_URL}/todo/${id}`,payload);
    const data = response.json();
    return data;
} catch (error) {
    throw new Error(error);
}
}
