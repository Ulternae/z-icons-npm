import React from 'react';

export interface MinaRupeeCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupeeCircleSolid: React.FC<MinaRupeeCircleSolidProps>;
export default MinaRupeeCircleSolid;
