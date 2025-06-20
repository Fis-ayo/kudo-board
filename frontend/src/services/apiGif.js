const apiKey = import.meta.env.VITE_KUDO_BOARD_API_KEY

export const getGifUrl = async () => {
    const res = await fetch(
        `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const data = await res.json();
    return data.data.images.original.url;
}

export const searchGif = async (query) => {
    try {
        const res = await fetch(
            `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=8&rating=g`
        );
        const data = await res.json();
        return data.data;
    } catch (err) {
        console.error('Error searching for gifs', err)
    }
}