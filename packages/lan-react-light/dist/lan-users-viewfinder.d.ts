import React from 'react';

export interface LanUsersViewfinderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersViewfinder(props: LanUsersViewfinderProps): React.ReactElement;
export default LanUsersViewfinder;
