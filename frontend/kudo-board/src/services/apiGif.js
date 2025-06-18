const apiKey = import.meta.env.VITE_KUDO_BOARD_API_KEY

export const getGifUrl = async () => {
    const res = await fetch(
        `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const data = await res.json();
    console.log(data);
    return data.data.images.original.url;
}