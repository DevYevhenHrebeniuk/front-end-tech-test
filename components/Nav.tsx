import Link from "next/link";
import Button from "./Button";

const Nav = ()=> {
    return(
        <nav>
            <ul className="flex gap-4 items-center text-white font-SatoshiBold text-small">
                <li className="">
                    <Link href="/">Creon Pass</Link>
                </li>
                <li>
                    <Link href="/">Token <sup className="text-xsmall text-purple-600 leading-[14px] uppercase inline-block bg-black px-[4px] rounded-md">soon</sup></Link>
                </li>
                <li>
                    <Link href="/">AI Revenue <sup className="text-xsmall text-purple-600 leading-[14px] uppercase inline-block bg-black px-[4px] rounded-md">soon</sup></Link>
                </li>
                <li>
                    <Link href="/">AI Launchpad <sup className="text-xsmall text-purple-600 leading-[14px] uppercase inline-block bg-black px-[4px] rounded-md">soon</sup></Link>
                </li>
                <li>
                    <Button />
                </li>
            </ul>
        </nav>
    )
}

export default Nav;