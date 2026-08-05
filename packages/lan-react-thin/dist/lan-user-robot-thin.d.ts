import React from 'react';

export interface LanUserRobotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserRobotThin(props: LanUserRobotThinProps): React.ReactElement;
export default LanUserRobotThin;
