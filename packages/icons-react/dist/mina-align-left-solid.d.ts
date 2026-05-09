import React from 'react';

export interface MinaAlignLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlignLeftSolid: React.FC<MinaAlignLeftSolidProps>;
export default MinaAlignLeftSolid;
