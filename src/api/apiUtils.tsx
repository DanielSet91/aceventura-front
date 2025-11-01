import { mainConfig } from "./config";

async function get<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${mainConfig.API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

async function post<T, B = unknown>(endpoint: string, data: B): Promise<T> {
  const response = await fetch(`${mainConfig.API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function getBinary(endpoint: string): Promise<Blob> {
  const response = await fetch(`${mainConfig.API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.blob();
}

export { get, post, getBinary };
