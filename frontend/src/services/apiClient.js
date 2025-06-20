import axios from 'axios'

const getBaseURL = () => {
    let result;
    if(import.meta.env.DEV){
        result='http://localhost:3000'
    }else{
        result='https://kudoboardservice.onrender.com'
    }
    return result;
}

const createApiInstance = (baseURL) => {
    return axios.create({
        baseURL,
    });
}

const boardApi = createApiInstance(`${getBaseURL()}/api/boards`);
const cardApi = createApiInstance(`${getBaseURL()}/api/boards`);

export const getBoards = async () => {
    try {
        const response = await boardApi.get('/');
        return response.data;
    } catch (err) {
        console.error("Error in fetching board", err);
        throw err;
    }
}

export const searchBoard = async (query) => {
    try {
        const response = await boardApi.get(`?searchTerm=${query}`);
        return response.data;
    } catch (err) {
        console.error("Error in fetching board", err);
        throw err;
    }
}

export const createBoard = async (title, category, author) => {
    const options = {
        method: 'POST',
        url: `${getBaseURL()}/api/boards`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            title,
            category,
            author
        }
    };
    try {
        const response = await axios(options);
        return response.data;
    } catch (err) {
        console.error("Error creating board", err);
        throw err;
    }
}

export const deleteBoard = async (boardId) => {
    try {
        const response = await boardApi.delete(`/${boardId}`);
        return response.data;
    } catch (err) {
        console.error("Error in deleting board", err);
        throw err;
    }
}

const BASE_URL = `${getBaseURL()}/api/boards`;

export const getCards = async (boardId) => {
    const url = `${BASE_URL}/${boardId}/cards`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`${response.status}, Error fetching cards`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error fetching cards", err)
    }
}

export const createCard = async (boardId, title, description, owner, GIF_URL) => {
    const options = {
        method: 'POST',
        url: `${BASE_URL}/${boardId}/cards`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            boardId,
            title,
            description,
            owner,
            GIF_URL
        }
    };
    try {
        const response = await axios(options);
        return response.data;
    } catch (err) {
        console.error("Error creating card", err);
        throw err;
    }
}

export const upVote = async (boardId, cardId) => {
    try {
        const response = await cardApi.patch(`/${boardId}/cards/${cardId}`);
        return response.data;
    } catch (err) {
        console.error("Error in deleting card", err);
        throw err;
    }
}

export const getPin = async (boardId, cardId) => {
    try {
        const data = await cardApi.put(`/${boardId}/cards/${cardId}/pinned`);
        return data;
    } catch (err) {
        console.error("Error in deleting card", err);
        throw err;
    }
}

export const deleteCard = async (boardId, cardId) => {
    try {
        const response = await cardApi.delete(`/${boardId}/cards/${cardId}`);
        return response.data;
    } catch (err) {
        console.error("Error in deleting card", err);
        throw err;
    }
}

export const getComments = async (boardId, cardId) => {
    const url = `${BASE_URL}/${boardId}/cards/${cardId}/comments`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`${response.status}, Error fetching comments`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error fetching comments", err)
    }
}

export const createComment = async (boardId, cardId, text, author) => {
    const options = {
        method: 'POST',
        url: `${BASE_URL}/${boardId}/cards/${cardId}/comments`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            cardId,
            text,
            author
        }
    };
    try {
        const response = await axios(options);
        return response.data;
    } catch (err) {
        console.error("Error creating card", err);
        throw err;
    }
}


