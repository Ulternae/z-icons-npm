import React from 'react';

export interface MinaDotsOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsOctagonSolid: React.FC<MinaDotsOctagonSolidProps>;
export default MinaDotsOctagonSolid;
