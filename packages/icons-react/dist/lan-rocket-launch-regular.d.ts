import React from 'react';

export interface LanRocketLaunchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRocketLaunchRegular: React.FC<LanRocketLaunchRegularProps>;
export default LanRocketLaunchRegular;
