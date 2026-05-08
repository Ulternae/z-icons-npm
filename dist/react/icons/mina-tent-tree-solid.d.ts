import React from 'react';

export interface MinaTentTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTentTreeSolid: React.FC<MinaTentTreeSolidProps>;
export default MinaTentTreeSolid;
