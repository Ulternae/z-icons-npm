import React from 'react';

export interface MinaYenOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenOctagonSolid: React.FC<MinaYenOctagonSolidProps>;
export default MinaYenOctagonSolid;
