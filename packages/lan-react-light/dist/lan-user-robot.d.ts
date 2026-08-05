import React from 'react';

export interface LanUserRobotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserRobot(props: LanUserRobotProps): React.ReactElement;
export default LanUserRobot;
