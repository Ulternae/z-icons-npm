import React from 'react';

export interface CoreCircleDollarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleDollarSolid: React.FC<CoreCircleDollarSolidProps>;
export default CoreCircleDollarSolid;
