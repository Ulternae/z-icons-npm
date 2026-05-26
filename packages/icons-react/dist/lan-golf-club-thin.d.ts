import React from 'react';

export interface LanGolfClubThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGolfClubThin: React.FC<LanGolfClubThinProps>;
export default LanGolfClubThin;
