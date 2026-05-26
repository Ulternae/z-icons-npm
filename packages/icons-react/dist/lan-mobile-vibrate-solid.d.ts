import React from 'react';

export interface LanMobileVibrateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileVibrateSolid: React.FC<LanMobileVibrateSolidProps>;
export default LanMobileVibrateSolid;
