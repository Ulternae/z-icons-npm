import React from 'react';

export interface MinaRupeeOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupeeOctagonSolid: React.FC<MinaRupeeOctagonSolidProps>;
export default MinaRupeeOctagonSolid;
