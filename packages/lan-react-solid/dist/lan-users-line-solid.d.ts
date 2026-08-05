import React from 'react';

export interface LanUsersLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersLineSolid(props: LanUsersLineSolidProps): React.ReactElement;
export default LanUsersLineSolid;
