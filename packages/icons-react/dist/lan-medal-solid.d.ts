import React from 'react';

export interface LanMedalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMedalSolid: React.FC<LanMedalSolidProps>;
export default LanMedalSolid;
