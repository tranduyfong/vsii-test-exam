import { apiFetch } from './api.interceptor'

export async function getContent(
    refId,
    refType,
    contentType
) {
    const params = new URLSearchParams({
        refId,
        refType,
        contentType,
    });

    return apiFetch(
        `/api/portal/contents/get?${params.toString()}`
    );
}