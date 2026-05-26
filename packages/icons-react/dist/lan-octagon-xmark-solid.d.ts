import React from 'react';

export interface LanOctagonXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonXmarkSolid: React.FC<LanOctagonXmarkSolidProps>;
export default LanOctagonXmarkSolid;
