import axios from 'axios'

const createApiInstance = (baseUrl) => {
    return axios.create({
        baseUrl,
    });
}

const boardApi = createApiInstance('http://localhost:3000/api/boards');
const cardApi = createApiInstance('http://localhost:3000/api/cards');

export const getBoards = async() => {
    try {
        const response = await boardApi.get('/');
        return response.data()
    } catch(err){
        console.error("Error in fetching board", err);
        throw err;
    }
}

export const createBoard = async(title, category, author) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:3000/api/boards',
        headers: {
            'Content-Type':'application/json'
        },
        body: {
            title,
            category,
            author
        }
    };
    axios(options)
        .then(response => {
            return response.data()
        })
        .catch(err => {
            console.error(err);
        })
}

export const deleteBoard = async(boardId) => {
    try {
        const response = await boardApi.delete(`/${boardId}`);
        return response.data()
    } catch(err){
        console.error("Error in deleting board", err);
        throw err;
    }
}

export const createCard = async(boardId, title, description, owner) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:3000/api/boards',
        headers: {
            'Content-Type':'application/json'
        },
        body: {
            boardId, 
            title, 
            description, 
            owner
        }
    };
    axios(options)
        .then(response => {
            return response.data()
        })
        .catch(err => {
            console.error(err);
        })
}

export const deleteCard = async(cardId) => {
    try {
        const response = await cardApi.delete(`/${cardId}`);
        return response.data()
    } catch(err){
        console.error("Error in deleting card", err);
        throw err;
    }
}