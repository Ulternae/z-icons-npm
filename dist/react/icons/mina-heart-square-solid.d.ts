import React from 'react';

export interface MinaHeartSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartSquareSolid: React.FC<MinaHeartSquareSolidProps>;
export default MinaHeartSquareSolid;
