import React from 'react';

export interface MinaSevenOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenOctagonSolid: React.FC<MinaSevenOctagonSolidProps>;
export default MinaSevenOctagonSolid;
