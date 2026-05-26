import React from 'react';

export interface LanGolfClubSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGolfClubSolid: React.FC<LanGolfClubSolidProps>;
export default LanGolfClubSolid;
