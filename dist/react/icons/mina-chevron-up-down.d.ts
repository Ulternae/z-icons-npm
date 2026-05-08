import React from 'react';

export interface MinaChevronUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronUpDown: React.FC<MinaChevronUpDownProps>;
export default MinaChevronUpDown;
