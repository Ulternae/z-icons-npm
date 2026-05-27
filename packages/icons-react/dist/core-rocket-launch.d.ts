import React from 'react';

export interface CoreRocketLaunchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRocketLaunch: React.FC<CoreRocketLaunchProps>;
export default CoreRocketLaunch;
