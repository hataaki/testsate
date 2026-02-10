# 放課後等デイサービス クラップ 採用サイト

児童指導員・児童発達支援管理責任者を募集する福祉の求人サイトです。

## 特徴

- **Next.js 16** を使用したモダンなウェブアプリケーション
- **TypeScript** による型安全な開発
- **Tailwind CSS** によるレスポンシブデザイン
- **Noto Sans JP** フォントによる美しい日本語表示
- オレンジと緑を基調とした優しい雰囲気のデザイン

## 技術スタック

- **フレームワーク**: Next.js 16.1.6
- **言語**: TypeScript 5.9.3
- **スタイリング**: Tailwind CSS 4.1.18
- **フォント**: Google Fonts (Noto Sans JP)
- **パッケージマネージャー**: pnpm

## セットアップ

### 必要な環境

- Node.js 22.13.0 以上
- pnpm

### インストール

```bash
# 依存関係のインストール
pnpm install
```

### 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
pnpm build
```

### 本番環境での起動

```bash
pnpm start
```

## デプロイ

### Vercelへのデプロイ

このプロジェクトはVercelへのデプロイに最適化されています。

1. [Vercel](https://vercel.com) にアカウントを作成
2. GitHubリポジトリと連携
3. プロジェクトをインポート
4. 自動的にビルド・デプロイが実行されます

### その他のプラットフォーム

- **Netlify**: `pnpm build` でビルドし、`.next` フォルダをデプロイ
- **AWS Amplify**: Next.js対応の設定でデプロイ
- **自前サーバー**: `pnpm build && pnpm start` で起動

## プロジェクト構造

```
fukushi-recruit/
├── app/
│   ├── layout.tsx       # ルートレイアウト（フォント設定含む）
│   ├── page.tsx         # メインページ
│   ├── globals.css      # グローバルスタイル
│   └── favicon.ico      # ファビコン
├── public/              # 静的ファイル
├── package.json         # 依存関係
└── README.md           # このファイル
```

## カスタマイズ

### カラーテーマの変更

`app/page.tsx` 内のTailwindクラスを編集してください：

- オレンジ: `orange-50`, `orange-100`, `orange-500`, `orange-600`
- 緑: `green-50`, `green-100`, `green-500`, `green-600`

### コンテンツの編集

`app/page.tsx` 内の各セクションを編集してください：

- ヒーローセクション
- 私たちについて
- 募集職種
- 福利厚生・待遇
- お問い合わせフォーム
- フッター

## ライセンス

© 2020-2026 放課後等デイサービス クラップ. All rights reserved.
