const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

// ctx = contexto
bot.start(ctx => {
    const from = ctx.update.message.from
    const id = ctx.update.message.from.id
    if (id == env.myTelegramID){
        ctx.reply(`Sim, meu mestre ${from.first_name}! Estou a sua disposição...`)
        console.log(from)
    }else{
        ctx.reply('Sinto muito! Eu só falo com o meu mestre...')
    }    
})

bot.startPolling()