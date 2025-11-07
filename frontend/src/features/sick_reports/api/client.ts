const API_BASE = import.meta.env.VITE_API_BASE ?? "http://localhost:4000";

export async function http<T>(path: string, init?: RequestInit): Promise<T> {
    const res = await fetch(`${API_BASE}${path}`, {
        headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
        ...init,
    });

    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

    return res.json();
}