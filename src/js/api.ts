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
