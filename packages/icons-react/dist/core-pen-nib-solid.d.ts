import React from 'react';

export interface CorePenNibSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePenNibSolid: React.FC<CorePenNibSolidProps>;
export default CorePenNibSolid;
