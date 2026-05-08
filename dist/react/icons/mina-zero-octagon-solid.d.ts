import React from 'react';

export interface MinaZeroOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroOctagonSolid: React.FC<MinaZeroOctagonSolidProps>;
export default MinaZeroOctagonSolid;
