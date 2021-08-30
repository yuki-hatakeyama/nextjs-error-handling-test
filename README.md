This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## ディレクトリ構成

```
/
├ public/             // 静的ファイル
├ pages/
│ ├ index.tsx         // ホーム
│ ├ _app.tsx          // 共通ファイル
│ └ .../index.tsx     // 下層ページ（TOP)
│    └ ...tsx         // 下層ページ
├ components          // 再利用性の高いコンポーネント
│ ├ Header/
│ │ ├ index.module.scss
│ │ ├ Presenter.tsx
│ │ ├ index.tsx
│ │ └ __test__
│ │    └ xxx.test.tsx
│ ├ Footer/
│ │ ├ index.module.scss
│ │ ├ Presenter.tsx
│ │ ├ index.tsx
│ │ └ __test__
│ │    └ xxx.test.tsx
│ ├ Button/
│ │ ├ index.module.scss
│ │ ├ Presenter.tsx
│ │ └ index.tsx
│ │ └ __test__
│ │    └ xxx.test.tsx
│ └ .../
├ hooks/              // カスタムフック（実際に作った際に良いパターンがあれば変更）
│ ├ useA.ts
│ └ useB.ts
├ routes/
│ └ index.ts          // ルーティングの一元管理
├ utils/              // 共通の関数
├ types/              // TypeScript のカスタム型定義を機能毎に配置する。
│ ├ menu.ts
│ ├ form.ts
│ ├ cart.ts
│ └ ...ts
├ styles/
│ ├ _reset.scss
│ ├ _globals.scss
│ └ .../              // pages とディレクトリを合わせる。
│   └ xxx.module.scss
├ constants/          // 定数管理（使用するコンポーネント毎にインポート）
│ └ index.ts
├ __test__
│  ├ pages/           // ページ毎のテスト
│  │ └ xxx.test.tsx
│  └ .../             // 関数に関するテスト
│    └ xxx.test.tsx│
├ cypress             // E2Eテスト
│ └ xxx.cypress
└ .next/              // ビルドファイル
```

[routes | Qiita](https://qiita.com/jagaapple/items/faf125e28f8c2860269c#11-%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%AA%E3%83%B3%E3%82%AF%E5%85%88%E3%82%92%E4%B8%80%E5%85%83%E7%AE%A1%E7%90%86%E3%81%99%E3%82%8B%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B)
