import React from 'react';

export interface MinaFiveOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFiveOctagonSolid: React.FC<MinaFiveOctagonSolidProps>;
export default MinaFiveOctagonSolid;
