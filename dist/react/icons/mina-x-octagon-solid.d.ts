import React from 'react';

export interface MinaXOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXOctagonSolid: React.FC<MinaXOctagonSolidProps>;
export default MinaXOctagonSolid;
