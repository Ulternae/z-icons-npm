import React from 'react';

export interface MinaDangerOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerOctagonSolid: React.FC<MinaDangerOctagonSolidProps>;
export default MinaDangerOctagonSolid;
