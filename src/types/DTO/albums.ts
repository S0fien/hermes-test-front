import { UsersDTO } from "./users";
type AlbumDTO = {
  userId: UsersDTO[number]["id"];
  id: number;
  title: string;
};

export type AlbumsDTO = AlbumDTO[];
