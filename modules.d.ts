declare module "flexsearch" {
  interface Index<T> {
    search(query: string, options?: number | SearchOptions): T[]
  }
}
