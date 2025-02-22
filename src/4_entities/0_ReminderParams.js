// リマインダーを送るのに必要な情報を持つDTO

class ReminderParams {
    /**
     * @param {string} title リマインダーのタイトル
     * @param {string} description リマインダーの詳細
     * @param {Date} dueDate リマインダーの締め切り時刻
     * @param {number[]} リマインダーのタイミングのリスト  
     */
    constructor(title, description, dueDate, timings)
    {
      this.title = title
      this.description = description
      this.dueDate = dueDate
      this.timings = timings
    }
  
    getTitle() {
      return this.title
    }
  
    getDescription() {
      return this.description
    }
  
    getDueDate() {
      return this.dueDate
    }
  
    getTimings() {
      return this.timings
    }
}
globalThis.ReminderParams = ReminderParams
