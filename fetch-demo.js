// Raw fetch: one example for each HTTP method
import { BASE_URL } from "./http.js"

// GET with query parameters
const params = new URLSearchParams({ userId: 1, _limit: 3 })
const getResponse = await fetch(`${BASE_URL}/posts?${params}`)
if (!getResponse.ok) throw new Error(`HTTP ${getResponse.status}`)
const posts = await getResponse.json()
console.log("GET", getResponse.status, posts)

// POST: create a new post
const newPost = { title: "Muraho Kigali", body: "My first post", userId: 1 }
const postResponse = await fetch(`${BASE_URL}/posts`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newPost),
})
if (!postResponse.ok) throw new Error(`HTTP ${postResponse.status}`)
console.log("POST", postResponse.status, await postResponse.json())

// PUT: replace the whole post
const putResponse = await fetch(`${BASE_URL}/posts/1`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 1, title: "Updated title", body: "Updated body", userId: 1 }),
})
if (!putResponse.ok) throw new Error(`HTTP ${putResponse.status}`)
console.log("PUT", putResponse.status, await putResponse.json())

// PATCH: change only one field
const patchResponse = await fetch(`${BASE_URL}/posts/1`, {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Only the title changed" }),
})
if (!patchResponse.ok) throw new Error(`HTTP ${patchResponse.status}`)
console.log("PATCH", patchResponse.status, await patchResponse.json())

// DELETE: remove the post
const deleteResponse = await fetch(`${BASE_URL}/posts/1`, { method: "DELETE" })
if (!deleteResponse.ok) throw new Error(`HTTP ${deleteResponse.status}`)
console.log("DELETE", deleteResponse.status, "Deleted post with ID 1")