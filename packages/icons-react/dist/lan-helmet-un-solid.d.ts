import React from 'react';

export interface LanHelmetUnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelmetUnSolid: React.FC<LanHelmetUnSolidProps>;
export default LanHelmetUnSolid;
