import React from 'react';

export interface LanTarpDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTarpDropletSolid: React.FC<LanTarpDropletSolidProps>;
export default LanTarpDropletSolid;
