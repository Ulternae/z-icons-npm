import React from 'react';

export interface LanRobotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRobotRegular(props: LanRobotRegularProps): React.ReactElement;
export default LanRobotRegular;
