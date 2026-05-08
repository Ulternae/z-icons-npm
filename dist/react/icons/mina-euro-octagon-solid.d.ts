import React from 'react';

export interface MinaEuroOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroOctagonSolid: React.FC<MinaEuroOctagonSolidProps>;
export default MinaEuroOctagonSolid;
