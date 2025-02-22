/**
 * メッセージを取得するための抽象クラス
 */
class FinderBase {
    /**
     * メッセージをオブジェクトのリストで返す
     * - body: メッセージ本文
     * - receivedDate: 受信日時
     * - markProcessed: 既読にする関数
     * @returns {{ body: string, receivedDate: Date, markProcessed: function }[]}
     */
    find() {
      throw new Error("find()メソッドが実装されていません")
    }
}
globalThis.FinderBase = FinderBase
