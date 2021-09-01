import { NextPageContext } from "next";

interface ErrorComponentProps {
  statusCode?: number;
}

function ErrorComponent({ statusCode }: ErrorComponentProps): JSX.Element {
  return (
    <p>
      {statusCode
        ? `サーバーで ${statusCode} エラーが発生しました。`
        : "クライアントでエラーが発生しました"}
    </p>
  );
}

ErrorComponent.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorComponent;
