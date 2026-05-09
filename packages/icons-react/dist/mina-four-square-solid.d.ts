import React from 'react';

export interface MinaFourSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourSquareSolid: React.FC<MinaFourSquareSolidProps>;
export default MinaFourSquareSolid;
