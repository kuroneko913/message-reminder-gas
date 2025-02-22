class ReminderParamsFactory extends ReminderParamsFactoryBase {
  
    /**
     * @param {number[]} reminderTimings リマインダー通知時間
     * @param {number} dueHour 締め切りまでの時間
     */
    constructor(remiderTimings, dueHour) {
      super()
      this.reminderTimings = remiderTimings
      this.dueHour = dueHour
    }
  
    /**
     * {@inheritDoc}
     * @override
     */
    create(item) {
      const dueDate = item.receivedDate
      dueDate.setHours(dueDate.getHours() + this.dueHour)
      
      return new ReminderParams(
          "メッセージが届いているよ！返信してね！", 
          item.body,
          dueDate,
          this.reminderTimings
      )
    }
}
globalThis.ReminderParamsFactory = ReminderParamsFactory
