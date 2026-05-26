import React from 'react';

export interface LanMobileRetroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileRetroSolid: React.FC<LanMobileRetroSolidProps>;
export default LanMobileRetroSolid;
