import React from 'react';

export interface LanUsersViewfinderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersViewfinderThin(props: LanUsersViewfinderThinProps): React.ReactElement;
export default LanUsersViewfinderThin;
