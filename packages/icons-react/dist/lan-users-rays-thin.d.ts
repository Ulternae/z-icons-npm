import React from 'react';

export interface LanUsersRaysThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersRaysThin: React.FC<LanUsersRaysThinProps>;
export default LanUsersRaysThin;
