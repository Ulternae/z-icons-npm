import React from 'react';

export interface LanUsersRectangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersRectangleSolid: React.FC<LanUsersRectangleSolidProps>;
export default LanUsersRectangleSolid;
