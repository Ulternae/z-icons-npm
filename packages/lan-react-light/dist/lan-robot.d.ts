import React from 'react';

export interface LanRobotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRobot(props: LanRobotProps): React.ReactElement;
export default LanRobot;
