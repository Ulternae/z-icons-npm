import React from 'react';

export interface LanMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonSolid: React.FC<LanMoonSolidProps>;
export default LanMoonSolid;
