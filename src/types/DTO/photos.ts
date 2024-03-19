type PhotoDTO = {
    albumId: number;
    id: number;
    title: string,
    url: string,
    thumbnailUrl: string;
}

export type PhotosDTO = PhotoDTO[]