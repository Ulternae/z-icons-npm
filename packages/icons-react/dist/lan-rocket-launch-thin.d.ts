import React from 'react';

export interface LanRocketLaunchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRocketLaunchThin: React.FC<LanRocketLaunchThinProps>;
export default LanRocketLaunchThin;
