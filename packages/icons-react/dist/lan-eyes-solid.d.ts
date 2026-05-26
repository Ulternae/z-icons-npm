import React from 'react';

export interface LanEyesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyesSolid: React.FC<LanEyesSolidProps>;
export default LanEyesSolid;
