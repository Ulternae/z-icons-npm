import React from 'react';

export interface LanApertureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanApertureSolid: React.FC<LanApertureSolidProps>;
export default LanApertureSolid;
