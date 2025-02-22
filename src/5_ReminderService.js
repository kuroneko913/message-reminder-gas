/**
 * メッセージを取得して、リマインダーをセットする
 */
class ReminderService {
    constructor(finder, reminder, reminderParamsFactory) {
      this.finder = finder
      this.reminder = reminder
      this.reminderParamsFactory = reminderParamsFactory
    }

    /**
     * メッセージを取得して、リマインダーをセットする
     */
    exec() {
      let items = this.finder.find()
      if (items.length === 0) {
        return
      }
  
      items.forEach(item => {
        const params = this.reminderParamsFactory.create(item)

        Logger.log(JSON.stringify(params, null, 2))
        this.reminder.remind(params)
  
        // 登録し終えたメッセージを既読にする
        item.markProcessed()
      })
    }
}
globalThis.ReminderService = ReminderService
