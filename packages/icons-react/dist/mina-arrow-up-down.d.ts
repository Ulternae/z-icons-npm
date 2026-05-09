import React from 'react';

export interface MinaArrowUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowUpDown: React.FC<MinaArrowUpDownProps>;
export default MinaArrowUpDown;
