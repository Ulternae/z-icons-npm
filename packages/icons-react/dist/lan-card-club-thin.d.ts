import React from 'react';

export interface LanCardClubThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardClubThin: React.FC<LanCardClubThinProps>;
export default LanCardClubThin;
