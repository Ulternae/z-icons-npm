import React from 'react';

export interface LanRobotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRobotThin(props: LanRobotThinProps): React.ReactElement;
export default LanRobotThin;
