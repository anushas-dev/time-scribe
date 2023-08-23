import Link from "next/link";


export default function Page() {
    return <>
        <div>
            <h2 className="text-2xl text-green-600 font-bold leading-7 text-center text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Welcome to Anusha's Book Shelf</h2>
            <div className="mx-auto mt-5 max-w-3xl">
                <div>
                    <Link href="/dashboard">
                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Dashboard</button>
                    </Link>
                    <Link href="/books">
                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Books</button>
                    </Link>
                    <Link href="/currently-reading">
                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Currently Reading</button>
                    </Link>
                </div>
            </div>
            <div className="mx-auto mt-7 max-w-3xl rounded-l ring-1 ring-gray-200">

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

                <p>Beyond books, experience a tranquil environment for you to ponder, study, or simply immerse yourself in
                    thought. Our cozy reading corners, thoughtfully designed study spaces, and inviting atmosphere are all here
                    to enhance your reading experience and foster a sense of community among fellow book enthusiasts.</p>

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