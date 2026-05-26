import React from 'react';

export interface LanCloudRainRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudRainRegular: React.FC<LanCloudRainRegularProps>;
export default LanCloudRainRegular;
