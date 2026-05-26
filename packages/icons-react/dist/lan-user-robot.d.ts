import React from 'react';

export interface LanUserRobotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserRobot: React.FC<LanUserRobotProps>;
export default LanUserRobot;
