import React from 'react';

export interface LanUsersRectangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersRectangleSolid(props: LanUsersRectangleSolidProps): React.ReactElement;
export default LanUsersRectangleSolid;
