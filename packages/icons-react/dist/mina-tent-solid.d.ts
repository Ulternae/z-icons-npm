import React from 'react';

export interface MinaTentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTentSolid: React.FC<MinaTentSolidProps>;
export default MinaTentSolid;
