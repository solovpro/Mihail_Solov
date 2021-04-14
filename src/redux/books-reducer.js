import five from '../assets/images/Пятый_номер.jpg';
import dih from '../assets/images/дыхание.webp';
import just from '../assets/images/just.webp';
import posle from '../assets/images/posle.webp';
import vopreki from '../assets/images/вопреки.webp';
import voimya from '../assets/images/voimya.webp';
import cherv from '../assets/images/ахахахахаахах_червь.webp';


let initialState = {
    books: [
        {
            id: 1,
            header: 'Пятый номер',
            photo: five,
            buy: 'https://www.chitai-gorod.ru/catalog/book/1260978/',
            text: 'text',
            description: 'Если вы запутались в своих отношениях,' +
                ' то эта книга поможет вам распутать даже крепко затянутые нити.' +
                ' На что вы готовы ради собственного счастья? Готовы ли вы перенести' +
                ' клиническую смерть и отправиться в загробное путешествие, чтобы после' +
                ' этого начать свою жизнь с чистого листа? И пройти весь этот путь вместе с главным героем?',

        },
        {
            id: 2,
            header: 'Дыхание истинной любви',
            photo: dih,
            buy: 'https://ridero.ru/books/dykhanie_istinnoi_lyubvi/',
            text: 'text',
            description: 'Сборник рассказов о любви, жизни и взаимоотношениях людей. Каждый человек' +
                ' в своей жизни сталкивается с некими трудностями. Трудности могут быть бытовыми, финансовыми' +
                ' или же во взаимоотношениях. В каждом из этих рассказов главные герои пытаются по-своему с' +
                ' ними справиться. У кого-то получается это сделать, а у кого-то нет.',
        },
        {
            id: 3,
            header: 'Просто строчка легла',
            photo: just,
            buy: 'https://ridero.ru/books/prosto_strochka_legla/',
            text: 'text',
            description: 'Просто строчка легла, Просто пальцы на клавиши пали… Я тебя не забыл,' +
                ' Я себя от тебя не избавил… Не смотри ты во тьму, Ты во тьме ничего не увидишь…' +
                ' Я к тебе не приду, А мой диск ты с утра размагнитишь… Эту музыку ветра Под строчку дождя я сыграю…' +
                ' Просидев до рассвета, Мелодией день начинаю… Разорву тишину Я, сыграв на минорных аккордах…' +
                ' Молоточек ударит струну, И порвется аорта.',
        },
        {
            id: 4,
            header: 'После дождя',
            photo: posle,
            buy: 'https://ridero.ru/books/posle_dozhdya_1/',
            text: 'text',
            description: 'Послушай, не идёт ли дождь, Не бьется ли о крышу дней…' +
                ' Послушай, не идёт ли дождь Над тихой Родиной моей.' +
                ' Послушай, не течёт вода С уставшей крыши бытия… Послушай,' +
                ' может, тем дождём Отчасти стал уже и я?',
        },
        {
            id: 5,
            header: 'Вопреки',
            photo: vopreki,
            buy: 'https://ridero.ru/books/vopreki/',
            text: 'text',
            description: 'Моя поэзия расскажет обо мне. Не стану я писать, что я философ. А напишу, что просто человек Пытается найти ответы на вопросы…',
        },
        {
            id: 6,
            header: 'Во имя Отечества',
            photo: voimya,
            buy: 'https://ridero.ru/books/voimya_otechestva//',
            text: 'text',
            description: 'История этого романа основана на реальных событиях.' +
                ' Роман описывает жизнь пяти поколений. Их интересы, цели, достижения, любовь и разочарование.',
        },
        {
            id: 7,
            header: 'Книжный червь',
            photo: cherv,
            buy: 'https://www.litres.ru/mihail-solovev-8341840/knizhnyy-cherv/chitat-onlayn/',
            text: 'text',
            description: 'На многое ли готов человек ради собственного счастья? Жизнь главного героя наполнена взлетами' +
                ' и падениями. От невыносимого страдания до безоблачного счастья — оказывается всего один лишь только шаг.' +
                ' Роман о чистой настоящей любви. О людях, которые не испугались и нашли себя и свое счастье в этом мире.',
        },
    ]
}

const booksReducer = (state = initialState, action) => {

    switch (action.type) {

        default:
            return state;
    }
};


export default booksReducer;