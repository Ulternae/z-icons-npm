import React from 'react';

export interface LanCloudMoonRainRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMoonRainRegular: React.FC<LanCloudMoonRainRegularProps>;
export default LanCloudMoonRainRegular;
