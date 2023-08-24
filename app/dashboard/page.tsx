import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return <>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image width="50" height="50" src="https://img.icons8.com/external-justicon-flat-justicon/64/external-book-education-justicon-flat-justicon.png" alt="Logo" />
          &nbsp; &nbsp;
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Anusha's Book Shelf</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/dashboard">
                <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Dashboard</button>
              </Link>
            </li>
            <li>
              <Link href="/books">
                <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Books</button>
              </Link></li>
            <li>

              <Link href="/currently-reading">
                <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Currently Reading</button>
              </Link>  </li>
          </ul>
        </div>
      </div>
    </nav>

    <div>
      <h1 className="text-3xl mt-5 font-bold text-green-600 text-center">Dashboard</h1>
      <div className="mx-auto mt-5 max-w-3xl rounded-2xl ring-1 ring-gray-200 px-10 py-5">
        <p>This dashboard will reflect the percentage of books of the different genres currently present in the library</p>
      </div>

    </div>
  </>
}