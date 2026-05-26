import React from 'react';

export interface LanTrophyAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrophyAltThin: React.FC<LanTrophyAltThinProps>;
export default LanTrophyAltThin;
