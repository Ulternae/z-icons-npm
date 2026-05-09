import React from 'react';

export interface MinaBitcoinOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoinOctagonSolid: React.FC<MinaBitcoinOctagonSolidProps>;
export default MinaBitcoinOctagonSolid;
