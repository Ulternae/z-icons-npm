import React from 'react';

export interface MinaAsteriskSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAsteriskSquareSolid: React.FC<MinaAsteriskSquareSolidProps>;
export default MinaAsteriskSquareSolid;
