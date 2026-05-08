import React from 'react';

export interface MinaAlignBottomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlignBottomSolid: React.FC<MinaAlignBottomSolidProps>;
export default MinaAlignBottomSolid;
