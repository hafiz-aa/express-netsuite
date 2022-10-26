var express = require("express");
var app = express();
var port = 3000;
var request = require("request");

var options = {
  url: "https://7632140.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token",
  headers: {
    Authorization: "Basic MmFkZGNiNTA2YjI4YjFlZTkyMjdjNjM1MzRiYzE0ZWRjMzYwOTFkNzA4MDEwMzBhYWFmOWJhNWExMzlmZGYxODoxN2QwMTBjNmZmM2UwYzNlM2RhMjkxYTU1MzRjMmJlNzBmYmJiZjAxMGJhZTkxOGNjY2Y0OWQ1YzFkY2MyMDg5",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: "NS_ROUTING_VERSION=LAGGING",
  },
  form: {
    grant_type: "refresh_token",
    refresh_token:
      "eyJraWQiOiJjLjc2MzIxNDAuMjAyMi0wOS0wOV8wMC0xMC0yMiIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzOzkwNSIsImF1ZCI6WyI3RUZFQUYyNC1GRTYyLTQ2OEUtQkNGMi0xMDYxMzM4MEYxMzE7NzYzMjE0MCIsIjJhZGRjYjUwNmIyOGIxZWU5MjI3YzYzNTM0YmMxNGVkYzM2MDkxZDcwODAxMDMwYWFhZjliYTVhMTM5ZmRmMTgiXSwic2NvcGUiOlsicmVzdF93ZWJzZXJ2aWNlcyJdLCJpc3MiOiJodHRwczpcL1wvc3lzdGVtLm5ldHN1aXRlLmNvbSIsIm9pdCI6MTY2NjMyNDU0MywiZXhwIjoxNjY2OTI5MzQzLCJpYXQiOjE2NjYzMjQ1NDMsImp0aSI6Ijc2MzIxNDAuci1hLmQ4NTkzNGFiLTNmYzQtNDA4Ni1iYjEyLWFhZjFhYzIyNmIzMV8xNjY2MzI0NTQzMjE2LjAifQ.EUN215am3_Eq8MU4rCeBAXUIdbvCPszksTo_zj_Yn4FxnyFUGOylAFRguE4yAG_OWQlkXSxnJpHkwqkCyreW-ij-X_0YpH6sG4Revs_4fxNElVmtGe3KMXqwShh30DgPTTgzUFXB19sDGNjtNzIe-BXdmf2wu0hGB7eCdWQIST-Nee1ZvCJc991w23DEdSowABO7WVWoMS94mvByo_78EV-J9bMEoXhJ9k0G-gt_wAT9RisVK_bU23J_fNuMCyiqZQMs5FW740cNKtVnk_rqEcZE9ttl12U5_LLYPl8AZuOcvym0UGg38hWf628PPZPWHfBCRK6pb94cpmxrvEKYIYm2PV4-Iqlyxw5aBYv5WeQuGGZ2sZ-sovdaySRv3ObCu_8MngY_GHYYWHuGVTF-7DUbEFSUthyZYgxaIRUSUN_mjtft0xJdNMlsrIF6slzV-DhVbmwEj-32zPBeTnmWh8-GD7DQMpBSL09v-zV4zY_2OCBpa41yyemFZI-gWK6RemM3OfaNgPDRRGNm-kOD-NnAOz5FGBbdRbOZijUo-lkO2OWsCm6R4AcEj2KFUGzrWx7Ef7O6ANoV9C6nq8KLErB4qzKxgx-acoKcf8Nkei4i6mcaUjfNhrvQvRbRDH9LnVoQ0Xnz5-ttTwDCJ4pD9zDwCij8fkGXbPEbvdjavnM",
  },
};
app.get(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
