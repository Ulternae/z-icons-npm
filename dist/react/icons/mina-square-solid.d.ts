import React from 'react';

export interface MinaSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSquareSolid: React.FC<MinaSquareSolidProps>;
export default MinaSquareSolid;
