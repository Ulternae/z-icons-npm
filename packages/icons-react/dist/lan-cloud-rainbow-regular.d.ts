import React from 'react';

export interface LanCloudRainbowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudRainbowRegular: React.FC<LanCloudRainbowRegularProps>;
export default LanCloudRainbowRegular;
