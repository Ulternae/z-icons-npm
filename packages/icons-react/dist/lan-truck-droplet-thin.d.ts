import React from 'react';

export interface LanTruckDropletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckDropletThin: React.FC<LanTruckDropletThinProps>;
export default LanTruckDropletThin;
