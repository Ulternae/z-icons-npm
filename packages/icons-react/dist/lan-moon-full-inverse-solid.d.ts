import React from 'react';

export interface LanMoonFullInverseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonFullInverseSolid: React.FC<LanMoonFullInverseSolidProps>;
export default LanMoonFullInverseSolid;
