import React from 'react';

export interface LanMeterDropletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterDropletThin: React.FC<LanMeterDropletThinProps>;
export default LanMeterDropletThin;
