import React from 'react';

export interface MinaXSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXSquareSolid: React.FC<MinaXSquareSolidProps>;
export default MinaXSquareSolid;
