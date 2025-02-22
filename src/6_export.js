//ReminderLibrary を作成
globalThis.ReminderLibrary = globalThis.ReminderLibrary || {}

//クラスを ReminderLibrary に追加
Object.assign(globalThis.ReminderLibrary, {
  ReminderParamsFactoryBase,
  ReminderParamsFactory,
  ReminderParams,
  ReminderBase,
  FinderBase,
  GmailFinder,
  GoogleCalendarReminder,
  ReminderService,
})
