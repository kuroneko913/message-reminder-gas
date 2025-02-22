// キーワードを指定してメールを検索する
class GmailFinder extends FinderBase {
    /**
     * @param {string} keyword 検索キーワード
     * @param {string} mailAddress 検索対象のメールアドレス
     * @param {bool} isUnRead 未読のメールだけにするか
     */
    constructor(keyword, mailAddress, isUnRead = true) {
      super()
      this.keyword = keyword
      this.mailAddress = mailAddress
      this.isUnRead = isUnRead
    }
  
    /**
     * {@inheritDoc}
     * @override
     */
    find() {
      return GmailApp.search(this.buildQuery()).map(thread => {
        const lastMessage = thread.getMessages()[0]
        return {
          body: lastMessage.getBody(),
          receivedDate: lastMessage.getDate(),
          markProcessed: () => thread.markRead()
        }
      })
    }
  
    /**
     * Gmail検索クエリを構築
     * @returns {string} 検索クエリ 
     */
    buildQuery() {
      let query = `${this.keyword} from:${this.mailAddress}`
      if (this.isUnRead) query += ' is:unread'
      return query
    }
}
globalThis.GmailFinder = GmailFinder
