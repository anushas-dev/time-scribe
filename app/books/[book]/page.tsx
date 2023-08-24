import Image from "next/image"

export default function Page() {
  return <>
    <nav className="bg-white bg-gradient-to-r from-emerald-700 via-teal-500 to-emerald-600 border-green-200 dark:bg-green-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image width="50" height="50" src="https://img.icons8.com/external-justicon-flat-justicon/64/external-book-education-justicon-flat-justicon.png" alt="Logo" />
          &nbsp; &nbsp;
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Anusha's Book Shelf</span>
        </a>

      </div>
    </nav>
    <div>
      <h1 className="text-3xl text-green-600 font-bold text-center">Book Name</h1>
      <p>Book Description</p>
      <p>Book Genre</p>
      <p>Book Author</p>
      <p>Book Highlights</p>
      <p>Other Related or Similar Books</p>
    </div>
  </>
}