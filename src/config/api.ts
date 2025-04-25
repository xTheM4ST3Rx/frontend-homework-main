const env = new String(import.meta.env.VITE_ENV);

type Config = {
  apiEndPoint: string;
};

export let config = {} as Config;

switch (env.toString()) {
  case "dev":
    config = {
      apiEndPoint: "http://localhost:3005",
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
