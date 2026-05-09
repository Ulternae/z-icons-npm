import React from 'react';

export interface MinaEightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEight: React.FC<MinaEightProps>;
export default MinaEight;
