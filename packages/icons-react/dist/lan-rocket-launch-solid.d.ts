import React from 'react';

export interface LanRocketLaunchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRocketLaunchSolid: React.FC<LanRocketLaunchSolidProps>;
export default LanRocketLaunchSolid;
