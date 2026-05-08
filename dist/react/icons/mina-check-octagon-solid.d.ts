import React from 'react';

export interface MinaCheckOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckOctagonSolid: React.FC<MinaCheckOctagonSolidProps>;
export default MinaCheckOctagonSolid;
