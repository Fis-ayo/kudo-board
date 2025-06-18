const apiKey = import.meta.env.KUDO_BOARD_API_KEY

const getGifUrl = async () => {
    const res = await fetch(
        `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const data = await res.json();
    return data.data.images.original.url;
}