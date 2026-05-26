import React from 'react';

export interface LanClubThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClubThin: React.FC<LanClubThinProps>;
export default LanClubThin;
