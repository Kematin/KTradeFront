import { API_URL } from "./env";

export async function fetchItems<T = unknown>(
  endpoint: string,
  queryParams?: Record<string, string | number | boolean>
): Promise<T> {
  const url = new URL(`${API_URL}/${endpoint}`);

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  try {
    const response = await fetch(url.toString(), options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Request failed with status ${response.status}`
      );
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`Fetch error for ${endpoint}:`, error);

    throw error;
  }
}

export async function postData<T = unknown, D = Record<string, unknown>>(
  endpoint: string,
  data: D,
  queryParams?: Record<string, string | number | boolean>
): Promise<T> {
  const url = new URL(`${API_URL}/${endpoint}`);

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url.toString(), options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Request failed with status ${response.status}`
      );
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`POST error for ${endpoint}:`, error);
    throw error;
  }
}

export async function uploadImage(file: File): Promise<{ filename: string }> {
  const formData = new FormData();
  formData.append("file", file);

  const options: RequestInit = {
    method: "POST",
    body: formData,
    credentials: "include",
  };

  const response = await fetch(`${API_URL}/image/upload`, options);

  if (!response.ok) {
    const message = await response.json();
    throw new Error(`Image upload failed. Error message: ${message}`);
  }

  return response.json();
}

export function getCurrencySymbol(currencyCode: string): string {
  const currencySymbols: Record<string, string> = {
    USD: "$",
    RUB: "₽",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
  };

  return currencySymbols[currencyCode] || currencyCode;
}
