export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

// 1. Centralized Error Handling
async function handleResponse(response: Response) {
  if (response.ok) {
    if (response.status === 204) return null;
    return response.json();
  }

  let errorMessage = 'API request failed';
  try {
    const errorBody = await response.json();
    errorMessage = errorBody.error || errorBody.message || response.statusText;
  } catch {
    errorMessage = response.statusText;
  }
  throw new Error(errorMessage);
}

// 2. Generic Wrappers
export async function get<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_URL}/${endpoint}`, { 
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json' }
  });
  return handleResponse(res);
}

export async function post<T>(endpoint: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return handleResponse(res);
}

export async function patch<T>(endpoint: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return handleResponse(res);
}

export async function put<T>(endpoint: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return handleResponse(res);
}

export async function remove(endpoint: string): Promise<void> {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  return handleResponse(res);
}
