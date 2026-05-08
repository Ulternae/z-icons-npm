import React from 'react';

export interface MinaTvSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTvSolid: React.FC<MinaTvSolidProps>;
export default MinaTvSolid;
