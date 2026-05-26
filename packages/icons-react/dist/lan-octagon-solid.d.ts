import React from 'react';

export interface LanOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonSolid: React.FC<LanOctagonSolidProps>;
export default LanOctagonSolid;
