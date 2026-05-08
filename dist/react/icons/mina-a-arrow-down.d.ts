import React from 'react';

export interface MinaAArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAArrowDown: React.FC<MinaAArrowDownProps>;
export default MinaAArrowDown;
