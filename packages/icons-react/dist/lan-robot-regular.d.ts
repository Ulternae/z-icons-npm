import React from 'react';

export interface LanRobotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRobotRegular: React.FC<LanRobotRegularProps>;
export default LanRobotRegular;
