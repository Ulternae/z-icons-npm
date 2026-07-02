import React from 'react';

export interface CoreRocketLaunchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRocketLaunch(props: CoreRocketLaunchProps): React.ReactElement;
export default CoreRocketLaunch;
