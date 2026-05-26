import React from 'react';

export interface LanUserViewfinderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserViewfinderSolid: React.FC<LanUserViewfinderSolidProps>;
export default LanUserViewfinderSolid;
