import React from 'react';

export interface LanTrophyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrophyThin: React.FC<LanTrophyThinProps>;
export default LanTrophyThin;
