import React from 'react';

export interface LanCardClubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardClub: React.FC<LanCardClubProps>;
export default LanCardClub;
