import React from 'react';

export interface LanBuildingUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingUser: React.FC<LanBuildingUserProps>;
export default LanBuildingUser;
