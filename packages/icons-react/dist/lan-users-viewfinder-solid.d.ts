import React from 'react';

export interface LanUsersViewfinderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersViewfinderSolid: React.FC<LanUsersViewfinderSolidProps>;
export default LanUsersViewfinderSolid;
