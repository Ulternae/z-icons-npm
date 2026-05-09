import React from 'react';

export interface MinaAlignTopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlignTopSolid: React.FC<MinaAlignTopSolidProps>;
export default MinaAlignTopSolid;
