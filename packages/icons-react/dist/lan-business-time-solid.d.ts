import React from 'react';

export interface LanBusinessTimeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusinessTimeSolid: React.FC<LanBusinessTimeSolidProps>;
export default LanBusinessTimeSolid;
