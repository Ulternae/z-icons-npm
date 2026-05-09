import React from 'react';

export interface MinaCodeOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCodeOctagonSolid: React.FC<MinaCodeOctagonSolidProps>;
export default MinaCodeOctagonSolid;
