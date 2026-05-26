import React from 'react';

export interface LanLighthouseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLighthouseSolid: React.FC<LanLighthouseSolidProps>;
export default LanLighthouseSolid;
