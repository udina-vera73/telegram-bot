process.env["NTBA_FIX_319"] = 1;

const TelegramBot = require('node-telegram-bot-api')// подключаем node-telegram-bot-api

const token = '5063832130:AAHU9waBu5yj9v2NV4lmoc0mbllGhqGorbM'; // тут токен кторый мы получили от botFather

// включаем самого обота
const bot = new TelegramBot(token, {polling: true});

//конфиг клавиатуры
const keyboard = [
    [
        {
            text: 'Посмотреть вариант 1', // текст на кнопке
            callback_data: 'variant1' // данные для обработчика событий
        }
    ],
    [
        {
            text: 'Посмотреть вариант 2', // текст на кнопке
            callback_data: 'variant2' // данные для обработчика событий
        }
    ],
    [
        {
            text: 'Посмотреть вариант 3', // текст на кнопке
            callback_data: 'variant3' // данные для обработчика событий
        }
    ],
    [
        {
            text: 'Посмотреть вариант 4', // текст на кнопке
            callback_data: 'variant4' // данные для обработчика событий
        }
    ],
    [
        {
            text: 'Посмотреть вариант 5', // текст на кнопке
            callback_data: 'variant5' // данные для обработчика событий
        }
    ],
    [
        {
            text: 'Посмотреть вариант 6', // текст на кнопке
            callback_data: 'variant6' // данные для обработчика событий
        }
    ],
];

const keyboardForPost = [
    [
        {
            text: 'Заказать',
            callback_data: 'pay'
        }
    ],
]

// const keyboardForPost2 = [
//     [
//         {
//             text: 'Заказать',
//             callback_data: 'pay2'
//         }
//     ],
// ]

// const keyboardForPost3 = [
//     [
//         {
//             text: 'Заказать',
//             callback_data: 'pay3'
//         }
//     ],
// ]


// обработчик события присылания нам любого сообщения
bot.on('message', (msg) => {
    const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

    bot.on("polling_error", console.log);

    if (msg.text === '/start') {
        bot.sendMessage(chatId, 'Добро пожаловать в эскорт агентство\n \n Уточните ваш город🙂\n Наш канал с отзывами (https://t.me/joinchat/jq6Yk6KZyU8wNTky)', { // прикрутим клаву
        reply_markup: {
            // inline_keyboard: keyboard
        }
    })}
    if (msg.text !== '/start') {
    bot.sendMessage(chatId, 'Доступные варианты для вашего города', { // прикрутим клаву
        reply_markup: {
            inline_keyboard: keyboard
        }
    })
    }
});

// обработчик событий нажатий на клавиатуру
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    bot.on("polling_error", console.log);

    let txt1 = `[Вероника ❤️]

☯️[Основные услуги]☯️
-классика (входит у стоимость)


✴️[Дополнительные услуги]✴️
-рабыня (600 рублей)
Госпожа (500 рублей)
-постоянная провокация (600 рублей)
-Доминирование(500 рублей)
Окончание куда угодно

💰[Стоимость девочки]💰
1 час       - 4500 рублей 
2 часа     - 8000 рублей 
3 часа     - 11000 рублей 
5 часов   - 15000 рублей 
Ночь        - 25000 рублей;`


    let txt2 = `[Василиса ❤️]

☯️[Основные услуги]☯️
-мбр (входит в стоимость)
-классика (входит у стоимость)
-мжм (2000 рублей)
-ас (1000 рублей) 
-массаж классический (входит в стоимость)
- массаж эротический (300 рублей) 

✴️[Дополнительные услуги]✴️
-Семейной паре (входит в стоимость)
-игрушки (500 рублей)

💰[Стоимость девочки]💰
1 час      - 4000 рублей 
2 часа    - 7000 рублей 
3 часа    - 10000 рублей 
5 часов  - 15000 рублей 
Ночь       - 24000 рублей`;


    let txt3 = `[Милана ❤️]


☯️[Основные услуги]☯️
-мбр (входит в стоимость)
-классика (входит у стоимость)
-ас (1000 рублей) 
-Минет глубокий (600 рублей) 

✴️[Дополнительные услуги]✴️
-игрушки (500 рублей )
-Окончание на лицо (600 рублей)
-Окончание на грудь (500 рублей)
-рабыня (800 рублей)
Госпожа (400 рублей)

💰[Стоимость девочки]💰
1 час       - 4000 рублей 
2 часа     - 7000 рублей 
3 часа     - 12000 рублей 
5 часов   - 16000 рублей 
Ночь        - 24000 рублей`;


    let txt4 = `[Полина ❤️]

☯️[Основные услуги]☯️
-мбр (входит в стоимость)
-классика (входит у стоимость)
-мжм (1800 рублей)
-ас (1000 рублей) 
-массаж классический (входит в стоимость)
- массаж эротический (300 рублей) 
-Кунилингус (400 рублей)
-Минет глубокий (800 рублей)
✴️[Дополнительные услуги]✴️
-игрушки (входит в стоимость)
Окончание куда угодно, деньги за это не беру😉
💰[Стоимость девочки]💰
1 час      - 4500 рублей 
2 часа    - 8500 рублей 
3 часа    - 12000 рублей 
5 часов  - 17000 рублей 
Ночь       - 28000 рублей`;


    let txt5 = `[Николь ❤️]
[Ощущаю себя кошкой, азартная и общительная. Работаю с мальчикам, девочкам и семейными парами]

☯️[Основные услуги]☯️
-мбр (входит в стоимость)
-классика (входит у стоимость)
-ас (1500 рублей) 
-Минет глубокий (1000 рублей) 
-Мжм (2000 рублей)

✴️[Дополнительные услуги]✴️
Семейные пары (входит в стоимость)
-игрушки (500 рублей )
-Окончание на лицо (600 рублей)
-Окончание на грудь (500 рублей)

💰[Стоимость девочки]💰
1 час       - 4000 рублей 
2 часа     - 7000 рублей 
3 часа     - 10000 рублей 
5 часов   - 15000 рублей 
Ночь        - 25000 рублей;`


    let txt6 = `[ Аня ❤️]
[Люблю и мальчиков и девочек, обожаю ласку и нежность]

☯️[Основные услуги]☯️
-мбр (входит в стоимость)
-классика (входит у стоимость)
-ас (1000 рублей) 
-Минет глубокий (1000 рублей) 
-мжм (2000 рублей)
✴️[Дополнительные услуги]✴️
-игрушки (500 рублей )''

💰[Стоимость девочки]💰
1 час       - 5000 рублей 
2 часа     - 8000 рублей 
3 часа     - 12000 рублей 
5 часов   - 16000 рублей 
Ночь        - 25000 рублей`;

    let items = [
        ['img1.jpg', txt1],
        ['img2.jpg', txt2], 
        ['img3.jpg', txt3], 
        ['img4.jpg', txt4], 
        ['img5.jpg', txt5],
        ['img6.jpg', txt6],
    ]

    if (query.data === 'variant1') {
        bot.sendPhoto(chatId, items[0][0], {
            reply_markup: {
                inline_keyboard: keyboardForPost
            },
        })
        bot.sendMessage(chatId, items[0][1], {
            reply_markup: {
                // inline_keyboard: keyboard
            }
        })}

    if (query.data === 'variant2') {
        bot.sendPhoto(chatId, items[1][0], {
            reply_markup: {
                inline_keyboard: keyboardForPost
            },
        })
        bot.sendMessage(chatId, items[1][1], {
            reply_markup: {
                // inline_keyboard: keyboard
            }
        })}

    if (query.data === 'variant3') {
        bot.sendPhoto(chatId, items[2][0], {
            reply_markup: {
                inline_keyboard: keyboardForPost
            },
        })
        bot.sendMessage(chatId, items[2][1], {
            reply_markup: {
                // inline_keyboard: keyboard
            }
        })}

    if (query.data === 'variant4') {
        bot.sendPhoto(chatId, items[3][0], {
            reply_markup: {
                inline_keyboard: keyboardForPost
            },
        })
        bot.sendMessage(chatId, items[3][1], {
            reply_markup: {
                // inline_keyboard: keyboard
            }
        })}

    if (query.data === 'variant5') {
        bot.sendPhoto(chatId, items[4][0], {
            reply_markup: {
                inline_keyboard: keyboardForPost
            },
        })
        bot.sendMessage(chatId, items[4][1], {
            reply_markup: {
                // inline_keyboard: keyboard
            }
        })}

    if (query.data === 'variant6') {
        bot.sendPhoto(chatId, items[5][0], {
            reply_markup: {
                inline_keyboard: keyboardForPost
            },
        })
        bot.sendMessage(chatId, items[5][1], {
            reply_markup: {
                // inline_keyboard: keyboard
            }
        })}

    // if (query.data === 'pay1') { 
    // let txtForPay = 'Укажите дату и время(Например 00:00 01.01.2022)'
    //     bot.sendMessage(chatId, txtForPay, {
    //         reply_markup: {
    //             // inline_keyboard: keyboardForPost
    //         }
    // })
    // bot.on('message', (msg) => {
    // const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

    // bot.on("polling_error", console.log);

    // if ((msg.text.indexOf('.') || msg.text.indexOf(':')) && msg.text !== '/start' && query.data === 'pay1') {
    // bot.sendMessage(chatId, 'Полная стоимость заказа составляет 3000р \n Стоимость предзаказа 1500р \n 4276500038818495 После оплаты не забудьте предоставить чек', { // прикрутим клаву
    //     reply_markup: {
    //         // inline_keyboard: keyboard
    //     }
    // })}
    // })}

    if (query.data === 'pay') { 
    let txtForPay = 'Укажите дату и время(Например 00:00 01.01.2022)'
        bot.sendMessage(chatId, txtForPay, {
            reply_markup: {
                // inline_keyboard: keyboardForPost
            }
    })
    bot.on('message', (msg) => {
    const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

    bot.on("polling_error", console.log);

    if ((msg.text.indexOf('.') || msg.text.indexOf(':')) && msg.text !== '/start') {
    bot.sendMessage(chatId, 'Полная стоимость заказа составляет 4000р \n Стоимость предзаказа 2000р \n 4276500038818495 После оплаты не забудьте предоставить чек', { // прикрутим клаву
        reply_markup: {
            // inline_keyboard: keyboard
        }
    })}
    })}

    // if (query.data === 'pay3') { 
    // let txtForPay = 'Укажите дату и время(Например 00:00 01.01.2022)'
    //     bot.sendMessage(chatId, txtForPay, {
    //         reply_markup: {
    //             // inline_keyboard: keyboardForPost
    //         }
    // })

    // bot.on('message', (msg) => {
    // const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

    // bot.on("polling_error", console.log);

    // if ((msg.text.indexOf('.') || msg.text.indexOf(':')) && msg.text !== '/start' && query.data === 'pay3') {
    // bot.sendMessage(chatId, 'Полная стоимость заказа составляет 5000р \n Стоимость предзаказа 2500р \n 4276500038818495 После оплаты не забудьте предоставить чек', { // прикрутим клаву
    //     reply_markup: {
    //         // inline_keyboard: keyboard
    //     }
    // })}
    // })}
})