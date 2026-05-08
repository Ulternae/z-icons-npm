import React from 'react';

export interface MinaOneOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneOctagonSolid: React.FC<MinaOneOctagonSolidProps>;
export default MinaOneOctagonSolid;
