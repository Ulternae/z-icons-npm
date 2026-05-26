import React from 'react';

export interface LanSunCloudThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunCloudThin: React.FC<LanSunCloudThinProps>;
export default LanSunCloudThin;
