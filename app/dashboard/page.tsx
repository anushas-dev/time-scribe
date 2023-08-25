import Image from "next/image"
import Link from "next/link"
import Navbar from "../../components/common/navbar"

export default function Page() {
  return <>
    <Navbar></Navbar>

    <div>
      <h1 className="text-3xl mt-5 font-bold text-gray-600 text-center">Dashboard</h1>
      <div className="mx-auto mt-5 max-w-3xl rounded-2xl ring-1 ring-gray-200 px-10 py-5">
        <p>This dashboard will reflect the percentage of books of the different genres currently present in the library</p>
      </div>

    </div>
  </>
}