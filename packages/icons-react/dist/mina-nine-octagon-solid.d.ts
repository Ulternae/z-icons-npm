import React from 'react';

export interface MinaNineOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNineOctagonSolid: React.FC<MinaNineOctagonSolidProps>;
export default MinaNineOctagonSolid;
