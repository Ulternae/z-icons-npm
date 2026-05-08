import React from 'react';

export interface MinaAsteriskOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAsteriskOctagonSolid: React.FC<MinaAsteriskOctagonSolidProps>;
export default MinaAsteriskOctagonSolid;
