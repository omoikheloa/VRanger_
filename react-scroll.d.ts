declare module 'react-scroll' {
    import { Component } from 'react';
  
    export interface LinkProps {
      to: string;
      spy?: boolean;
      smooth?: boolean;
      offset?: number;
      duration?: number;
      delay?: number;
      isDynamic?: boolean;
      ignoreCancelEvents?: boolean;
      onSetActive?: (to: string) => void;
      onSetInactive?: (to: string) => void;
      className?: string;
      activeClass?: string;
    }
  
    export class Link extends Component<LinkProps> {}
    export const Button: any;
    export const Element: any;
    export const animateScroll: any;
    export const scrollSpy: any;
    export const scroller: any;
  }  