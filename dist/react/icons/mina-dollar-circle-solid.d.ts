import React from 'react';

export interface MinaDollarCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDollarCircleSolid: React.FC<MinaDollarCircleSolidProps>;
export default MinaDollarCircleSolid;
