import { g, config } from '@grafbase/sdk'

const book = g.model('Book', {
  id: g.id().unique(),
  title: g.string(),
  genre: g.relation(() => genre).optional(),
  author: g.relation(() => author),
  isbn: g.id().unique(),
  asin: g.id().unique(),
})

const author = g.model('Author', {
  id: g.id().unique(),
  firstName: g.string(),
  lastName: g.string(),
})

const genre = g.model('Genre', {
  id: g.id().unique(),
  name: g.string(),
})

export default config({
  schema: g
})