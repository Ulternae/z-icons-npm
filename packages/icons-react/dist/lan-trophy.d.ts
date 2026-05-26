import React from 'react';

export interface LanTrophyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrophy: React.FC<LanTrophyProps>;
export default LanTrophy;
