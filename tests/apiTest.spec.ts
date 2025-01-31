import { test, expect } from "@playwright/test";

test("API test", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  var resJson = await response.json();

  expect(response.status()).toBe(200);
  expect(resJson.data[0].first_name).toBe("Michael");
  console.log(resJson);
});

test("API test2", async ({ request }) => {
  var u1 = {
    name: "miro",
    job: "dydko",
  };

  const response = await request.post("https://reqres.in/api/users", {
    data: u1,
    headers: {
      "Content-Type": "application/json",
    },
  });

  var responseJson = await response.json();
  expect(response.status()).toBe(201);
  expect(responseJson.name).toBe("miro");
  console.log(responseJson);
});
