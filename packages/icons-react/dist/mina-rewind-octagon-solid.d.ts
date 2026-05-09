import React from 'react';

export interface MinaRewindOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindOctagonSolid: React.FC<MinaRewindOctagonSolidProps>;
export default MinaRewindOctagonSolid;
