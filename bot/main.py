from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CallbackContext, CommandHandler
from data import WEBAPP_URL, TOKEN


async def launch_web_ui(update: Update, callback: CallbackContext):
    print("ye nafar start kard :)")
    kb = [
        [InlineKeyboardButton(
            "بزن اینجا",
            web_app=WebAppInfo(WEBAPP_URL)
        )]
    ]
    await update.message.reply_text("میخای پولداربشی ؟؟", reply_markup=InlineKeyboardMarkup(kb))

if __name__ == '__main__':
    application = ApplicationBuilder().token(TOKEN).build()
    application.add_handler(CommandHandler('start', launch_web_ui))
    print("started")
    application.run_polling()
