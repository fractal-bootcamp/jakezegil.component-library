import { motion } from "framer-motion";
import "./accordion.css";
import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

type Items = AccordionItem[];

export interface AccordionProps {
  items: Items;
}

export const AccordionItem = ({
  title,
  content,
  defaultOpen = false,
}: AccordionItem) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <motion.div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
        >
          ^
        </motion.div>
      </div>
      <motion.div
        animate={{
          height: isOpen ? "auto" : "0",
          overflow: "hidden",
        }}
      >
        {content}
      </motion.div>
    </motion.div>
  );
};

/** Primary UI component for user interaction */
export const Accordion = ({ items, ...props }: AccordionProps) => {
  return (
    <div {...props}>
      {items.map((item) => (
        <AccordionItem key={item.title} {...item} />
      ))}
    </div>
  );
};
