import React from 'react';

export interface MinaThreeSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeSquareSolid: React.FC<MinaThreeSquareSolidProps>;
export default MinaThreeSquareSolid;
