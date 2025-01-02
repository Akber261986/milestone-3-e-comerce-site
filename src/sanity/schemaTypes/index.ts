import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import Category from './category'
import Clients from './Clients'
import About from './About'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, Category, Clients, About],
}