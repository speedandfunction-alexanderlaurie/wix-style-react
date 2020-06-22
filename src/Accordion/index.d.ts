import * as React from 'react';

import { AccordionItemProps } from './AccordionItem';

export interface AccordionProps {
  dataHook?: string;
  multiple?: boolean;
  items?: AccordionItem[];
  skin?: AccordionItemProps['skin'];
  hideShadow?: boolean;
}

export default class Accordion extends React.Component<AccordionProps> {}
