import React from 'react';

export interface MinaRupeeCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupeeCircle: React.FC<MinaRupeeCircleProps>;
export default MinaRupeeCircle;
