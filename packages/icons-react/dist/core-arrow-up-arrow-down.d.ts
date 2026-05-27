import React from 'react';

export interface CoreArrowUpArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreArrowUpArrowDown: React.FC<CoreArrowUpArrowDownProps>;
export default CoreArrowUpArrowDown;
