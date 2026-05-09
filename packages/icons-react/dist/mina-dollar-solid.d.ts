import React from 'react';

export interface MinaDollarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDollarSolid: React.FC<MinaDollarSolidProps>;
export default MinaDollarSolid;
