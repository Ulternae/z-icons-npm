import React from 'react';

export interface MinaAmpersandSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAmpersandSquareSolid: React.FC<MinaAmpersandSquareSolidProps>;
export default MinaAmpersandSquareSolid;
