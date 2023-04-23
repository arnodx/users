export interface User {
  id: number,
  email: string,
  name: string,
  first_name: string,
  last_name: string,
  avatar: string,
}

export interface FavoriteUser {
  id: number,
  isFavorite: boolean
}
