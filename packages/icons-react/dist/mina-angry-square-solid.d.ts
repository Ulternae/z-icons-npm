import React from 'react';

export interface MinaAngrySquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAngrySquareSolid: React.FC<MinaAngrySquareSolidProps>;
export default MinaAngrySquareSolid;
