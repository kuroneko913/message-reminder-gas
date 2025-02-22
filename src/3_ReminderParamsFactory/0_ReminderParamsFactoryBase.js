/**
 * ReminderParamsを生成するためのファクトリーの抽象クラス
 */
class ReminderParamsFactoryBase {
    /**
     * リマインダー用のパラメータを生成
     * @param {{ body: string, receivedDate: Date }} item MessageFinderから取得したデータ
     * @returns {ReminderParams}
     */
    create(item) {
      throw new Error("create()メソッドが実装されていません")
    }
}
globalThis.ReminderParamsFactoryBase = ReminderParamsFactoryBase
