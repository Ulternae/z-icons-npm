import React from 'react';

export interface MinaChevronDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronDown: React.FC<MinaChevronDownProps>;
export default MinaChevronDown;
