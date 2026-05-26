import React from 'react';

export interface LanGolfClubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGolfClub: React.FC<LanGolfClubProps>;
export default LanGolfClub;
