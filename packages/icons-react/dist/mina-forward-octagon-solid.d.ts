import React from 'react';

export interface MinaForwardOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardOctagonSolid: React.FC<MinaForwardOctagonSolidProps>;
export default MinaForwardOctagonSolid;
