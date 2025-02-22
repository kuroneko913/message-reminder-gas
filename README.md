# はじめに
GoogleAppsScriptでメール受信時にリマインダー登録する仕組みを作成。
できる限り各モジュールに依存がないように分離した。

# 使い方
```js
function main() {
  // メッセージを取得するためのインスタンス
  const finder = new GmailFinder("{検索したいメールタイトル}", "{メールアドレス}")
  // リマインダーを登録するためのインスタンス
  const reminder = new GoogleCalendarReminder()
  // リマインダーに設定する値を指定: リマインドするまでの時間、締切時間
  const reminderParamsFactory = new ReminderParamsFactory([1435, 1380, 1200, 960, 720], 24)

  // メッセージを受け取ったらリマインダーを設定する
  const reminder = new ReminderService(finder, reminder, reminderParamsFactory)
  reminder.exec()
}
```

Gmail以外で検索する場合は、FinderBaseを実装するクラスを追加することで可能になる。

GoogleCalendar以外でリマインダー登録する場合は、ReminderBaseを実装するクラスを追加することで可能になる。

リマインダーの設定を変更する場合は、ReminderParamsFactoryBaseを実装するクラスを追加したり、Factoryにわたす値を変更することで可能になる。
