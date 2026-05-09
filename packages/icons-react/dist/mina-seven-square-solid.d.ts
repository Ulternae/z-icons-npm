import React from 'react';

export interface MinaSevenSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenSquareSolid: React.FC<MinaSevenSquareSolidProps>;
export default MinaSevenSquareSolid;
