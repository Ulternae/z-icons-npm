import React from 'react';

export interface MinaInfoOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoOctagonSolid: React.FC<MinaInfoOctagonSolidProps>;
export default MinaInfoOctagonSolid;
