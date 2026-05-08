import React from 'react';

export interface MinaHashSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashSquareSolid: React.FC<MinaHashSquareSolidProps>;
export default MinaHashSquareSolid;
