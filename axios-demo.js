// The same CRUD operations with axios
import axios from "axios"
import { BASE_URL } from "./http.js"

const client = axios.create({ baseURL: BASE_URL })

try {
  const { data: posts, status } = await client.get("/posts", { params: { _limit: 3 } })
  console.log("GET", status, posts)

  const created = await client.post("/posts", { title: "Muraho Kigali", body: "My first post", userId: 1 })
  console.log("POST", created.status, created.data)

  const replaced = await client.put("/posts/1", { id: 1, title: "Updated title", body: "Updated body", userId: 1 })
  console.log("PUT", replaced.status, replaced.data)

  const patched = await client.patch("/posts/1", { title: "Only the title changed" })
  console.log("PATCH", patched.status, patched.data)

  const deleted = await client.delete("/posts/1")
  console.log("DELETE", deleted.status, "Deleted post with ID 1")

  await client.get("/posts/99999")
} catch (error) {
  if (axios.isAxiosError(error) && error.response) {
    console.log(`Handled axios error ${error.response.status}`)
  } else {
    throw error
  }
}