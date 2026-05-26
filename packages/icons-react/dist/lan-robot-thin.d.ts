import React from 'react';

export interface LanRobotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRobotThin: React.FC<LanRobotThinProps>;
export default LanRobotThin;
