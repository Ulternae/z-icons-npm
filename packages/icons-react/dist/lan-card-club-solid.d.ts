import React from 'react';

export interface LanCardClubSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardClubSolid: React.FC<LanCardClubSolidProps>;
export default LanCardClubSolid;
