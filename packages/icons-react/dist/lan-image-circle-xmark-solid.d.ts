import React from 'react';

export interface LanImageCircleXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageCircleXmarkSolid: React.FC<LanImageCircleXmarkSolidProps>;
export default LanImageCircleXmarkSolid;
