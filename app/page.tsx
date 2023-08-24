import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return <>
        <div>
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
            
            <div className="mx-auto mt-5 max-w-3xl rounded-2xl ring-1 ring-gray-200 px-10 py-5">

                <p>Dear book lovers and curious minds,</p>
                <p>I am delighted to extend a warm and hearty welcome to you at Anusha's Book Shelf. Nestled within these walls
                    are endless worlds, infinite adventures, and boundless knowledge waiting to be explored. Whether you're a
                    seasoned reader or just beginning to embark on your literary journey, this space is designed to be your
                    haven of imagination and learning.</p>
                <p>Step into a realm where words come alive, where characters become your friends, and where ideas shape your
                    perspective. Our shelves are meticulously curated to offer a diverse collection spanning across genres,
                    cultures, and eras, ensuring that every visitor finds something that resonates with their soul.</p>

                <p>Feel free to lose yourself in the enchanting tales of fiction, dive deep into the realms of non-fiction
                    that expand horizons, or indulge in the pleasure of discovering hidden gems among our curated selections.
                    From classics that have withstood the test of time to contemporary works that reflect the pulse of our
                    world, Anusha's Library is your gateway to endless possibilities.</p>

                <p>As you embark on your journey through our shelves, we encourage you to let your curiosity run wild, to ask
                    questions, to engage in discussions, and to share your thoughts with us and your fellow readers. Anusha's
                    Library is not just a collection of books; it's a space where ideas are nurtured, connections are forged,
                    and minds are enriched.</p>

                <p>Thank you for choosing me as your literary companion. May your visits to Anusha's Library be filled with
                    wonder, inspiration, and the joy of discovering new worlds one page at a time.</p>

                <p>Happy reading!</p>

                <p>Warmest regards, <br></br>Anusha's Book Shelf</p>

            </div>

        </div>
    </>
}