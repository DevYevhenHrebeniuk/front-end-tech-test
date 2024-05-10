"use client"

import Link from "next/link";
import ConnectButton from "./ConnectButton";
import CloseIcon from "@/components/Icons/CloseIcon";
import Social from "@/components/Social";
import {useState} from 'react';

interface Menu {
    isOpened: boolean
}


const Nav = ()=> {
    const [menu, setMenu] = useState<Menu>({isOpened: false});
    const navItemClasses: string = 'border-darkGray border-b-[1px] first:border-t-[1px] xl:first:border-0 py-[16px] xl:py-0 xl:border-0'

    let classes: string = 'fixed xl:relative top-0 right-0 h-dvh xl:h-auto overflow-auto w-[250px] xl:w-auto bg-black xl:bg-transparent flex flex-col xl:flex-row transtion-all duration-300 pb-[74px] pl-[30px] xl:pl-[0] xl:pb-0 xl:translate-x-0';

    const handleToggleMenu = () => {
        setMenu( (prev) => ({isOpened: !prev.isOpened}));
    }

    const translateClass = menu.isOpened ? ' translate-x-0' : 'translate-x-[500px]';

    return(
        <>
            <button onClick={handleToggleMenu} className="flex items-center px-[7px] border-2 border-white w-[44px] rounded-[6px] h-[44px] text-white relative after:content-[''] after:absolute after:bottom-[12px] after:w-[26px] after:h-[2px] after:bg-white before:content-[''] before:absolute before:top-[12px] before:w-[26px] before:h-[2px] before:bg-white xl:hidden">
                <span className="block w-[26px] h-[2px] bg-white"></span>
            </button>
            <div className={classes + ' ' + translateClass}>
                <div className="flex justify-between items-center py-[30px] pr-[18px] text-white xl:hidden">
                    <ConnectButton />
                    <button onClick={handleToggleMenu} className="flex w-[44px] h-[44px] justify-center items-center rounded-[6px] border-2 border-white text-white bg-transparent hover:bg-lightBlue hover:border-lightBlue">
                        <CloseIcon />
                    </button>
                </div>
                <nav className="">
                    <ul className="flex flex-col xl:flex-row xl:gap-4 text-white font-SatoshiBold text-small xl:items-center">
                        <li className={navItemClasses}>
                            <Link href="/">Creon Pass</Link>
                        </li>
                        <li className={navItemClasses}>
                            <Link href="/">Token <sup className="text-xsmall text-purple-600 leading-[14px] uppercase inline-block bg-black px-[4px] rounded-md">soon</sup></Link>
                        </li>
                        <li className={navItemClasses}>
                            <Link href="/">AI Revenue <sup className="text-xsmall text-purple-600 leading-[14px] uppercase inline-block bg-black px-[4px] rounded-md">soon</sup></Link>
                        </li>
                        <li className={navItemClasses}>
                            <Link href="/">AI Launchpad <sup className="text-xsmall text-purple-600 leading-[14px] uppercase inline-block bg-black px-[4px] rounded-md">soon</sup></Link>
                        </li>
                        <li className="hidden xl:block border-darkGray border-b-[1px]">
                            <ConnectButton />
                        </li>
                    </ul>
                </nav>
                <Social classes="xl:hidden absolute bottom-[20px] left-[30px]"/>
            </div>
        </>
    )
}

export default Nav;