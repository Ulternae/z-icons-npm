import React from 'react';

export interface MinaArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowDown: React.FC<MinaArrowDownProps>;
export default MinaArrowDown;
