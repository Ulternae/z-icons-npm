import React from 'react';

export interface MinaScanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaScanSolid: React.FC<MinaScanSolidProps>;
export default MinaScanSolid;
