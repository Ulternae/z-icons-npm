import React from 'react';

export interface LanUsersViewfinderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersViewfinder: React.FC<LanUsersViewfinderProps>;
export default LanUsersViewfinder;
