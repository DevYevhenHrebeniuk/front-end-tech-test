import AccordionItem from "./AccordionItem";
import AccordionItems from "@/app/models/Accordion";

const Accordion = () => {
    const items = AccordionItems.map((item, index) => {
        return <AccordionItem 
            key={'a-' + index}  
            title={item.title} 
            description={item.description} 
            isActive={item.isActive}
            Icon={item.Icon}
        />
    })

    return (
        <div>
            {items}
        </div>
    )
}

export default Accordion;