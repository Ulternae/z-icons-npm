import React from 'react';

export interface MinaOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOctagonSolid: React.FC<MinaOctagonSolidProps>;
export default MinaOctagonSolid;
