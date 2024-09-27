import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGNmMTg1NzhiNTEwMjBmMGMzMzJjNDUyZmQ3YmUyYyIsIm5iZiI6MTcyNzM3MTM2NS42MjI3MTksInN1YiI6IjY2ZjNmNjU0ZjViNDk3ODY0MzIyZmM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GG0FznDdeYJHFrT8SspcvfhYj6l9TcP7zYzks6bLKEQ'
    }
})

export default instance;