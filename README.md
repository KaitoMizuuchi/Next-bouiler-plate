# Next.jsのプロジェクトテンプレート

# 特徴
* Next.jsとTypeScriptでセットアップをしています。
    * App routerを使用。
    * ESLintを使用。
    * srcディレクトリを使用。
    * import エイリアスを使用。

* Prettier, ESLint, Stylelintを統合し、コードの品質を維持しています。
* CSS Moduleを使用しています。
* huskyを使用して、git commit時にESLintとpretteirを実行してます。

# セットアップ
1. このリポジトリのクローン
2. 依存パッケージのインストール
```bash
npm install
```
3. huskyの初期化
```bash
npx husky init && echo "npx lint-staged" > .husky/pre-commit
```
4. 開発サーバーの起動
```bash
npm run dev
```

# Prettier
**目的**: コードのフォーマット統一　<br>
**設定ファイル**: `.prettierrc` <br>
**実行タイミング**: 保存時とgit commit時 <br>
**内容**:
* importの順番を指定しています。
    * Type型のインポート
    * react関連やnext関連のインポート
    * サードパーティのモジュールのインポート
    * 自作のコンポーネントのインポート
* 横幅の最大を`80`に指定しています。
* インデントの幅を`2`に指定しています。
* 末尾のセミコロンを追加するように指定しています。
* 配列やオブジェクトなど、複数行にわたる構造の末尾にカンマを付与するように指定しています。
* 文字列は`シングルクォート`を指定しています。
* JSX内とscss内の文字列は`ダブルクォート`を指定しています。
* 改行コードを`lf`で指定しています。
* アロー関数の引数にかっこをけるように指定しています。
* HTMLの空白感度を`css`で指定しています。

# ESLint
**目的**: TypeScript コードの静的解析と問題検出。　<br>
**設定ファイル**: `eslint.config.mjs` <br>
**実行タイミング**: git commit時 <br>
**内容**:
* nextプロジェクトでのTypeScriptを使った推奨ツールでの解析をしています。
* 型のインポートを`import type`に強制しています。自動変更を適用しています。
* 未使用の変数や関数があるかを解析します。
* ファイル名が`camelCase`と`PascalCase`かどうかを解析します。
* JSX以外のファイルからエクスポートする際は名前付きエクスポートのみを許可しています。
```TypeScript
export const greet(name: string): string => {
	retrun `${name}さんおはよう`;
}
```
* tsxファイルは`rface`などで自動で生成するためdefaltエクスポートを許可しています。
* 関数がアロー関数かどうかを解析しています。アロー関数でない場合はエラーが出ます。
* `console.log`が残っているか解析します。残っていたらエラーが出ます。
    * `console.warn`や`console.error`は許可している。try-catchのエラーハンドリングは`console.error`を利用する
 

# Stylelint
**目的**: CSS/SCSS のスタイルガイド適用とエラー検出。　<br>
**設定ファイル**: `.stylelintrc` <br>
**実行タイミング**: 保存時 <br>
**内容**:
* `stylelint-config-standard-scss`をベースにしています。
* `$`で始まる変数名の命名規則を無効化します。
* 未知の`@ルール`をエラーとします。
    * `@use`や`@include`や`@mixin`などは例外として許可しています。
* アルファ値の数値を小数点で表記するように指定しています。
```scss
rgba(0, 0, 0, 0.5)
```
* 自由なクラス名を許可しています。
* 色の名前指定を禁止しています。
* urlの関数内はクォートをつけないようにしています。
* からのスタイルファイルを許容しています。
* 冗長なロングハンドプロパティを禁止しています。
* プロパティの並び順を決まった順序に指定しています、
