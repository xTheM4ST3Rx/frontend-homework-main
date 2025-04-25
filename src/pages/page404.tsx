import { Link } from "react-router";

export function Page404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Desculpe, a página que você está procurando não existe.
        <div className="text-center">
          <Link to="/" className="text-blue-500 hover:underline ml-2">
            Voltar para o início
          </Link>
        </div>
      </p>
    </div>
  );
}
