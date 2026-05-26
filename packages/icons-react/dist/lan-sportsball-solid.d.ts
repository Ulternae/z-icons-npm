import React from 'react';

export interface LanSportsballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSportsballSolid: React.FC<LanSportsballSolidProps>;
export default LanSportsballSolid;
