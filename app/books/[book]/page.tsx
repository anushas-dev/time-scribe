import Image from "next/image"
import Navbar from "../../../components/common/navbar"

export default function Page() {
  return <>
    <Navbar></Navbar>
      <div>
        <h1 className="text-3xl text-gray-600 font-bold text-center">Book Name</h1>
        <p>Book Description</p>
        <p>Book Genre</p>
        <p>Book Author</p>
        <p>Book Highlights</p>
        <p>Other Related or Similar Books</p>
      </div>
    </>
}