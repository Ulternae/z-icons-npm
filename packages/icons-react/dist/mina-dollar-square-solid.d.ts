import React from 'react';

export interface MinaDollarSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDollarSquareSolid: React.FC<MinaDollarSquareSolidProps>;
export default MinaDollarSquareSolid;
