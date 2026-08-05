import React from 'react';

export interface LanUsersRaysThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersRaysThin(props: LanUsersRaysThinProps): React.ReactElement;
export default LanUsersRaysThin;
