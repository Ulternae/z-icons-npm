import React from 'react';

export interface LanTrophyAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrophyAlt: React.FC<LanTrophyAltProps>;
export default LanTrophyAlt;
