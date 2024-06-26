'use client';

import { useState } from "react";
import Image from "next/image";
import defaultState from '@/public/images/svg/default-icon-bg.svg';

import activeState from '@/public/images/svg/active-icon-bg.svg';
import ArrowIcon from '@/public/images/svg/icon-arrow.svg';

type AccordionItemProps = {
    title: string,
    description: string,
    isActive: boolean,
    Icon: React.FC
}

const AccordionItem = ({title, description, isActive, Icon}: AccordionItemProps) => {
    const [opened, setOpened] = useState(isActive);
    const transitionClass: string = 'transition-all ease-in-out duration-300 text-small pl-[130px] mb-[30px]';
    const commonIconClasses: string = 'absolute left-0 top-0';

    function handleClick() {
        setOpened((prevState) => !prevState);
    }

    return (
        <div className="text-white border-b border-darkGray mb-[30px] transition-all ease-in-out duration-300">
            <div className="font-SatoshiBold text-medium flex gap-[30px] items-center pr-[40px] relative cursor-pointer" onClick={handleClick}>
                <div className="relative w-[100px] h-[114px]">
                    <Image src={activeState} alt="default" className={`${commonIconClasses}  ${opened ? ' block ' : ' hidden'}`}/>
                    <Image src={defaultState} alt="default" className={`${commonIconClasses}  ${opened ? ' hidden ' : ' block'}`}/>
                    <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"><Icon /></span>
                </div>
                
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