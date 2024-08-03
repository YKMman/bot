const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv').config()
const webAppUrl = 'https://next-bot-six.vercel.app/';

const bot = new TelegramBot(process.env.API_KEY_BOT, {
    polling: true
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if(text === '/start') {
        await bot.sendMessage(chatId, 'Заходите в наше приложение', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Открыть приложение', web_app: {url: webAppUrl}}]
                ]
            }
        })
    } else {
        await bot.sendMessage(chatId, 'Вы зашли в наше приложение?', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Открыть приложение', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
});