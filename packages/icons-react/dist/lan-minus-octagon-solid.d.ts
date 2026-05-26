import React from 'react';

export interface LanMinusOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusOctagonSolid: React.FC<LanMinusOctagonSolidProps>;
export default LanMinusOctagonSolid;
