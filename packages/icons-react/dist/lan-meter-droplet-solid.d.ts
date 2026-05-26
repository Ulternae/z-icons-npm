import React from 'react';

export interface LanMeterDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterDropletSolid: React.FC<LanMeterDropletSolidProps>;
export default LanMeterDropletSolid;
