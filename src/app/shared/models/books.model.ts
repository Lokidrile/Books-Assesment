export interface Book {
    id: string,
    title: string,
    author: string,
    year: number,
    inWishList: boolean,
    cover: string,
    genres: string[],
    genreString?: string,
    price: number,
    available: boolean
}