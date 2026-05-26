import React from 'react';

export interface LanCloudShowersWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudShowersWater: React.FC<LanCloudShowersWaterProps>;
export default LanCloudShowersWater;
