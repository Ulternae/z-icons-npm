import React from 'react';

export interface LanCloudRainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudRain: React.FC<LanCloudRainProps>;
export default LanCloudRain;
