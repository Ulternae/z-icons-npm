import React from 'react';

export interface LanUsersLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersLineSolid: React.FC<LanUsersLineSolidProps>;
export default LanUsersLineSolid;
