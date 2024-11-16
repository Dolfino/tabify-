test("GET to /api/v1/status should return 200", async () => {

  // Envia a requisição para a API
  const response = await fetch("http://localhost:3000/api/v1/status")
  // Verifica se o status da resposta é 200
  expect(response.status).toBe(200);

  // Converte o corpo da resposta para JSON
  const responseBody = await response.json();

  // Verifica se a data de atualização está no formato ISO correto
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("17.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
