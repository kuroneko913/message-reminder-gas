class GoogleCalendarReminder extends ReminderBase {
    constructor() {
      super()
      this.calendar = CalendarApp.getDefaultCalendar()
    }
  
    // 5回までポップアップ形式のリマインダーをセットできる
    /**
     * {@inheritDoc}
     * @override
     */
    remind(params) {
      let options = {
        description: params.getDescription()
      }
      let event = this.calendar.createEvent(params.getTitle(), params.getDueDate(), params.getDueDate(), options)
      params.getTimings().forEach((remindTiming) => {
        event.addPopupReminder(remindTiming)
      })
      Logger.log({ title:event.getTitle(), date: event.getEndTime() })
    }
}
globalThis.GoogleCalendarReminder = GoogleCalendarReminder
