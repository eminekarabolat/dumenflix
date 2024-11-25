export interface IMovieCardResponse{
    id: number,
    title: string,
    productionYear: number,
    rating: 1|2|3|4|5,
    genre: 'Aksiyon' | 'Drama' | 'Komedi' | 'Gerilim' | 'Bilim Kurgu' | 'Korku' | 'Macera' | 'null',
    imageUrl: string
}