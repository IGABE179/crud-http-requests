// Full CRUD using the reusable helper from http.js
import { api, HttpError } from "./http.js"

try {
  const posts = await api.get("/posts?_limit=3")
  console.log("READ all:", posts)

  const created = await api.post("/posts", { title: "Muraho Kigali", body: "My first post", userId: 1 })
  console.log("CREATE:", created)

  const replaced = await api.put("/posts/1", { id: 1, title: "Updated title", body: "Updated body", userId: 1 })
  console.log("UPDATE (PUT):", replaced)

  const patched = await api.patch("/posts/1", { title: "Only the title changed" })
  console.log("UPDATE (PATCH):", patched)

  await api.del("/posts/1")
  console.log("DELETE: post 1 deleted")

  await api.get("/posts/99999")
} catch (error) {
  if (error instanceof HttpError) {
    console.log(`Handled HttpError ${error.status}: ${error.message}`)
  } else {
    throw error
  }
}