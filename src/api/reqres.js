import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001",
});

export async function postWorkintech(payload) {
  const { data } = await client.post("/workintech", payload);
  return data;
}
