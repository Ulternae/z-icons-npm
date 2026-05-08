import React from 'react';

export interface MinaMinusOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinusOctagonSolid: React.FC<MinaMinusOctagonSolidProps>;
export default MinaMinusOctagonSolid;
