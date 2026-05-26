import React from 'react';

export interface LanRobotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRobot: React.FC<LanRobotProps>;
export default LanRobot;
