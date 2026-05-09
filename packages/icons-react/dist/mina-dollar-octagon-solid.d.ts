import React from 'react';

export interface MinaDollarOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDollarOctagonSolid: React.FC<MinaDollarOctagonSolidProps>;
export default MinaDollarOctagonSolid;
