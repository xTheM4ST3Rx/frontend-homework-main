# FrontEnd Taya

Uma simples demonstração de uma dashboard para conectar aos recursos do backend.

# Intalação

```bash
npm i
```

Depois para rodar

```bash
npm run dev
```

OBSERVAÇÃO: no front esta definido o ID 1, basta alterar em:
src/services/apiService.ts

```ts
class ApiService {
  private readonly axiosInstance: AxiosInstance;
  private readonly baseURL: string = config.apiEndPoint;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        user_id: "1", //USER DEFINIDO
      },
    });
  }
```

Resultado esperado

![alt text](/src/assets/image.png)

Lembrando que é necessário o backend estar rodando na portar 3005, em caso de alteração mudar no arquivo config do frontEnd
