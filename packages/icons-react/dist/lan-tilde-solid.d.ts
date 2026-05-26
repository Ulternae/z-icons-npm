import React from 'react';

export interface LanTildeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTildeSolid: React.FC<LanTildeSolidProps>;
export default LanTildeSolid;
