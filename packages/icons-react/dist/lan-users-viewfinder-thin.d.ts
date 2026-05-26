import React from 'react';

export interface LanUsersViewfinderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersViewfinderThin: React.FC<LanUsersViewfinderThinProps>;
export default LanUsersViewfinderThin;
