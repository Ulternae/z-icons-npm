import React from 'react';

export interface MinaDotsVerticalOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalOctagonSolid: React.FC<MinaDotsVerticalOctagonSolidProps>;
export default MinaDotsVerticalOctagonSolid;
