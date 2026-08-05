import React from 'react';

export interface LanRocketLaunchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRocketLaunchThin(props: LanRocketLaunchThinProps): React.ReactElement;
export default LanRocketLaunchThin;
