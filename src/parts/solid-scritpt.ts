import { Composer } from 'grammy'
import { KILLING_STICKER } from '../constants'

export const solidScript = new Composer

solidScript.hears(/пидор|негр|нигга|лесбух/i, async ctx => {
    await ctx.reply('быстро исправил', { reply_to_message_id: ctx.msg.message_id })
    await ctx.replyWithSticker(KILLING_STICKER)
})

solidScript.hears(/нет/i).filter(
    ctx => Boolean(ctx.msg.reply_to_message && ctx.msg.reply_to_message.text == 'быстро исправил' && ctx.from && ctx.from.id == ctx.me.id),
    ctx => ctx.reply('п-слова ответ\n@tokutonariwa', { reply_to_message_id: ctx.msg.message_id })
)