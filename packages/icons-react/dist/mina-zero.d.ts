import React from 'react';

export interface MinaZeroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZero: React.FC<MinaZeroProps>;
export default MinaZero;
