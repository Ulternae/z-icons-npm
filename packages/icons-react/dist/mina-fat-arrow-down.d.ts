import React from 'react';

export interface MinaFatArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFatArrowDown: React.FC<MinaFatArrowDownProps>;
export default MinaFatArrowDown;
