import React from 'react';

export interface LanBuildingUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingUser(props: LanBuildingUserProps): React.ReactElement;
export default LanBuildingUser;
