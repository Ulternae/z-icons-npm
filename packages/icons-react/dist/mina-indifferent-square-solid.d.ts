import React from 'react';

export interface MinaIndifferentSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaIndifferentSquareSolid: React.FC<MinaIndifferentSquareSolidProps>;
export default MinaIndifferentSquareSolid;
