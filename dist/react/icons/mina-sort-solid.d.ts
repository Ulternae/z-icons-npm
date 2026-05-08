import React from 'react';

export interface MinaSortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSortSolid: React.FC<MinaSortSolidProps>;
export default MinaSortSolid;
