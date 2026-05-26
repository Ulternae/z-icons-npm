import React from 'react';

export interface LanRocketLaunchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRocketLaunch: React.FC<LanRocketLaunchProps>;
export default LanRocketLaunch;
