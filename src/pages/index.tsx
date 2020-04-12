import React, { useState, useEffect, useMemo } from "react"
import { Link, graphql } from "gatsby"
import FlexSearch, { Index } from "flexsearch"
import styled from "styled-components"

import { Layout, SEO, Card } from "../components"
import { IndexPageQuery } from "../../graphql-types"

const Cards = styled.div`
  margin: auto;
  max-width: 960px;
  padding-top: 30px;
  > div:not(:last-child) {
    margin-bottom: 16px;
  }
`

const SearchBox = styled.input`
  margin-top: 30px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid lightgrey;
  outline: none;
  width: 100%;
  max-width: 400px;
  padding: 3px 10px;

  ::placeholder {
    font-style: italic;
  }

  &:focus {
    border: 1px solid rebeccapurple;
    transition: border 0.1s cubic-bezier(0.4, 0, 1, 1) 0s;
    animation: 0.1s cubic-bezier(0.4, 0, 1, 1) 0s 1 normal none running dtOkaS;
    box-shadow: rgba(90, 40, 250, 0.2) 0px 0px 0px 2px;
  }
`

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
      <SearchBox
        value={query}
        onChange={e => {
          setQuery(e.target.value)
        }}
        placeholder="Cherchez votre produit ici.."
      />
      <Cards>
        {searchResults.map(({ title, code }, idx) => (
          <Card key={idx} title={title} code={code} />
        ))}
      </Cards>
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
