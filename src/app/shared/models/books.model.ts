export interface Book {
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