import React from 'react';

export interface LanUsersRaysProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersRays(props: LanUsersRaysProps): React.ReactElement;
export default LanUsersRays;
