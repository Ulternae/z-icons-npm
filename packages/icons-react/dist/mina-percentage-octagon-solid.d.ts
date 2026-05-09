import React from 'react';

export interface MinaPercentageOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentageOctagonSolid: React.FC<MinaPercentageOctagonSolidProps>;
export default MinaPercentageOctagonSolid;
