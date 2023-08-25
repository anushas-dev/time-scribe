import Image from "next/image"
import Link from "next/link"
import Navbar from "../../components/common/navbar"

export default function Page() {
  return <>
    <Navbar></Navbar>
    <div>
      <h1 className="text-3xl mt-5  text-gray-600 font-bold text-center">Currently Reading</h1>
      <div className="mx-auto mt-5 max-w-3xl rounded-2xl ring-1 ring-gray-200 px-10 py-5">
        This section will show the current reads in the shelf - Share notes and highlights
      </div>

    </div>
  </>
}