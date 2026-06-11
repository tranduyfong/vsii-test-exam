const BASE_URL =
    "https://api-uat.vinhomes.biz.vn/hovixi/api/v1";

export async function apiFetch(url) {
    const response = await fetch(url);

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result.message || "Request failed"
        );
    }

    return result;
}