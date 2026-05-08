import React from 'react';

export interface MinaEightOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightOctagonSolid: React.FC<MinaEightOctagonSolidProps>;
export default MinaEightOctagonSolid;
