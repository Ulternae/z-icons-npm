import React from 'react';

export interface MinaAlignHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlignHorizontalSolid: React.FC<MinaAlignHorizontalSolidProps>;
export default MinaAlignHorizontalSolid;
