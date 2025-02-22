/**
 * メッセージをリマインドするための抽象クラス
 */
class ReminderBase {
    /**
     * リマインダーをセットする
     * @param {ReminderParams} params リマインダーをセットするのに必要なパラメータ
     */
    remind(params) {
      throw new Error("remind()メソッドが実装されていません")
    }
}
globalThis.ReminderBase = ReminderBase
