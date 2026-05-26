import React from 'react';

export interface LanUserRobotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserRobotThin: React.FC<LanUserRobotThinProps>;
export default LanUserRobotThin;
