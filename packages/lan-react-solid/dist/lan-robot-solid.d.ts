import React from 'react';

export interface LanRobotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRobotSolid(props: LanRobotSolidProps): React.ReactElement;
export default LanRobotSolid;
