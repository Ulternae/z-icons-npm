import React from 'react';

export interface LanMenorahSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMenorahSolid: React.FC<LanMenorahSolidProps>;
export default LanMenorahSolid;
