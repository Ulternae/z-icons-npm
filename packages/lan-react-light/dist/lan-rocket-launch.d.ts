import React from 'react';

export interface LanRocketLaunchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRocketLaunch(props: LanRocketLaunchProps): React.ReactElement;
export default LanRocketLaunch;
