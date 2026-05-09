import React from 'react';

export interface MinaTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoSolid: React.FC<MinaTwoSolidProps>;
export default MinaTwoSolid;
