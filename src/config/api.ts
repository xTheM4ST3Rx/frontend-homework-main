const env = new String(import.meta.env.VITE_ENV || "localhost");

type Config = {
  apiEndPoint: string;
};

export let config = {} as Config;

switch (env.toString()) {
  case "localhost":
    config = {
      apiEndPoint: "http://localhost:3005",
    };
    break;

  case "dev":
    config = {
      apiEndPoint: "....",
    };
    break;

  case "homolog":
    config = {
      apiEndPoint: "...",
    };
    break;

  case "prod":
    config = {
      apiEndPoint: "...",
    };
    break;
}
