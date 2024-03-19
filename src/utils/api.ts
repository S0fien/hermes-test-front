import {ALBUMS_API, PHOTOS_API, USERS_API} from "../constants/API_URLS.ts";

export async function fetchUsers() {
    const response = await fetch(USERS_API);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
}

export async function fetchAlbums() {
    const response = await fetch(ALBUMS_API);
    if (!response.ok) {
        throw new Error('Failed to fetch albums');
    }
    return response.json();
}

export async function fetchPhotos() {
    const response = await fetch(PHOTOS_API);
    if (!response.ok) {
        throw new Error('Failed to fetch photos');
    }
    return response.json();
}