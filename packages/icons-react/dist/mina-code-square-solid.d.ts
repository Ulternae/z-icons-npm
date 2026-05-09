import React from 'react';

export interface MinaCodeSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCodeSquareSolid: React.FC<MinaCodeSquareSolidProps>;
export default MinaCodeSquareSolid;
