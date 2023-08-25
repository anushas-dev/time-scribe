import Image from "next/image"
import Link from "next/link"
import Navbar from "../../components/common/navbar"

import { cacheExchange, createClient, fetchExchange, gql } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';

const makeClient = () => {
  return createClient({
    url: process.env.GRAFBASE_API_URL,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.GRAFBASE_API_KEY
      }
    },
  });
};

const BooksQuery = gql`
{
	bookCollection(first: 100) {
		edges {
			node {
				title
        author
        genre
        isbn
				asin
			}
		}
	}
}

`;

const { getClient } = registerUrql(makeClient);

export default async function Page() {
  const result = await getClient().query(BooksQuery, {});
  const book_data = result.data.bookCollection.edges;

  return <>
    <Navbar></Navbar>
    <div className="body-font font-play">
      <h1 className="text-3xl mt-5  font-bold text-center text-gray-600">Books</h1>
      <br></br><br></br>
      <div className="relative overflow-x-auto px-10">
        <table className="w-full text-l text-left text-gray-600 dark:text-gray-700">
          <thead className="">
            <tr>
              <th scope="col">Book Title</th>
              <th scope="col">Author</th>
              <th scope="col">Genre</th>
              <th scope="col">ISBN</th>
              <th scope="col">ASIN</th>
            </tr>
          </thead>
          <tbody>
            {book_data.map((item) => {
              return <tr key={item.id}>
                <td>{item.node.title} </td>
                <td>{item.node.author} </td>
                <td>{item.node.genre} </td>
                <td>{item.node.isbn} </td>
                <td>{item.node.asin ? item.node.asin : "N/A"} </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  </>
}