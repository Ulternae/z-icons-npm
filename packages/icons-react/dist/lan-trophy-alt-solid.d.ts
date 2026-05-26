import React from 'react';

export interface LanTrophyAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrophyAltSolid: React.FC<LanTrophyAltSolidProps>;
export default LanTrophyAltSolid;
