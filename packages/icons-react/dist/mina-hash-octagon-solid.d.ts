import React from 'react';

export interface MinaHashOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashOctagonSolid: React.FC<MinaHashOctagonSolidProps>;
export default MinaHashOctagonSolid;
