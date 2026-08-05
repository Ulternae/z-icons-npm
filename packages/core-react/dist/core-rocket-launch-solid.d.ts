import React from 'react';

export interface CoreRocketLaunchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRocketLaunchSolid(props: CoreRocketLaunchSolidProps): React.ReactElement;
export default CoreRocketLaunchSolid;
