import React from 'react';

export interface LanRocketLaunchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRocketLaunchSolid(props: LanRocketLaunchSolidProps): React.ReactElement;
export default LanRocketLaunchSolid;
