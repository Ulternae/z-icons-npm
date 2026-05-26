import React from 'react';

export interface LanClubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClub: React.FC<LanClubProps>;
export default LanClub;
