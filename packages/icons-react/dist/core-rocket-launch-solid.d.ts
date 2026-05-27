import React from 'react';

export interface CoreRocketLaunchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRocketLaunchSolid: React.FC<CoreRocketLaunchSolidProps>;
export default CoreRocketLaunchSolid;
