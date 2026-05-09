import React from 'react';

export interface MinaPlusOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlusOctagonSolid: React.FC<MinaPlusOctagonSolidProps>;
export default MinaPlusOctagonSolid;
