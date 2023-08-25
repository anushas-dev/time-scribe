import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/common/navbar";

export default function Page() {
    return <>

        <div>
            <Navbar></Navbar>

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