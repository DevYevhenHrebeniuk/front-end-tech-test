'use client';

import { useState } from "react";
import Image from "next/image";
import ArrowIcon from '@/public/images/svg/icon-arrow.svg';

type AccordionItemProps = {
    title: string,
    description: string,
    isActive: boolean,
    Icon: React.FC<{active?: boolean}>
}

const AccordionItem = ({title, description, isActive, Icon}: AccordionItemProps) => {
    const [opened, setOpened] = useState(isActive);
    const transitionClass = 'transition-all ease-in-out duration-300 text-small pl-[130px] mb-[30px]';

    function handleClick() {
        setOpened((prevState) => !prevState);
    }

    return (
        <div className="text-white border-b border-darkGray mb-[30px] transition-all ease-in-out duration-300">
            <div className="font-SatoshiBold text-medium flex gap-[30px] items-center pr-[40px] relative cursor-pointer" onClick={handleClick}>
                <span><Icon active={opened}/></span>
                {title}
                <span className={ `${opened ? 'rotate-180': ''} w-[16px] h-[16px] absolute right-[24px] top-[50%] mt-[-8px]`}><Arrow /></span>
            </div>
            <div className={opened ? 'max-h-[800px] ' + transitionClass : 'max-h-0 overflow-hidden ' + transitionClass}>{description}</div>
        </div>
    )
}

const Arrow = () => {
    return (
        <Image src={ArrowIcon} alt="arrow"/>
    )
}

export default AccordionItem;