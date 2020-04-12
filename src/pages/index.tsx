import React, { useState, useEffect, useMemo } from "react"
import { Link, graphql } from "gatsby"
import FlexSearch, { Index } from "flexsearch"

import { Layout, SEO } from "../components"
import { IndexPageQuery } from "../../graphql-types"

interface Entry {
  code: number
  title: string
}

const IndexPage: React.FC<{
  data: IndexPageQuery
  location: Location
}> = ({ data }) => {
  const { allAirtable } = data

  const [query, setQuery] = useState("")
  const [index, setIndex] = useState<Index<number> | null>(null)

  useEffect(() => {
    const newIndex = FlexSearch.create<number>({
      async: false,
      encode: "advanced",
      // tokenize: "reverse",
      // suggest: true,
      // cache: true,
    })
    allAirtable.nodes.forEach((node, idx) => {
      if (node.data?.title) {
        newIndex.add(idx, node.data?.title)
      }
    })
    setIndex(newIndex)
  }, [allAirtable])

  const searchResults = useMemo(() => {
    if (!query || !index)
      return allAirtable.nodes.map(node => node.data as Entry)

    return index.search(query).map(i => allAirtable.nodes[i].data as Entry)
  }, [query, index])

  return (
    <Layout>
      <SEO title="Fruits & Légumes" />
      <input
        value={query}
        onChange={e => {
          setQuery(e.target.value)
        }}
      />
      {searchResults.map(({ title, code }, idx) => (
        <div key={idx}>
          {title} {code}
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    allAirtable {
      nodes {
        data {
          code: Code
          status: Status
          title: Title
        }
      }
    }
  }
`

export default IndexPage
