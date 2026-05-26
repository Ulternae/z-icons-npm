import React from 'react';

export interface LanCloudShowersWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudShowersWaterThin: React.FC<LanCloudShowersWaterThinProps>;
export default LanCloudShowersWaterThin;
