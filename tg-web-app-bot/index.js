const TelegramBot = require('node-telegram-bot-api')

const token = '7244794435:AAFYjWjK-fQ5m8ha5NrfSttkF_px78qbenE'
const webAppUrl = 'https://ya.ru'
const bot = new TelegramBot(token, { polling: true })

bot.on('text', async msg => {
	const text = msg.text
	if (text === '/start') {
		await bot.sendMessage(msg.chat.id, 'Заполните форму', {
			reply_markup: {
				keyboard: [[{ text: 'Форма', web_app: { url: webAppUrl } }]],
			},
		})
		await bot.sendMessage(msg.chat.id, 'Инлайн', {
			reply_markup: {
				inline_keyboard: [[{ text: 'Инлайн', web_app: { url: webAppUrl } }]],
			},
		})
	}
})
