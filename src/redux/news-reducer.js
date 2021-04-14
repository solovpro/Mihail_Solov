import cherv from "../assets/images/ахахахахаахах_червь.webp";

let initialState = {
    news: [
        {
            id: 1,
            header: 'Шокирующая новость1!',
            photo: cherv,
            text: 'Шокирующая новость поступила нам из президентской резиденции'
        },
        {
            id: 2,
            header: 'Шокирующая новость2!',
            photo: cherv,
            text: 'Шокирующая новость поступила нам из президентской резиденции'
        },
        {
            id: 3,
            header: 'Шокирующая новость3!',
            photo: cherv,
            text: 'Шокирующая новость поступила нам из президентской резиденции'
        },
        {
            id: 4,
            header: 'Шокирующая новость4!',
            photo: cherv,
            text: 'Шокирующая новость поступила нам из президентской резиденции'
        },
        {
            id: 5,
            header: 'Шокирующая новость5!',
            photo: cherv,
            text: 'Шокирующая новость поступила нам из президентской резиденции'
        },
    ],
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default newsReducer;