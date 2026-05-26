import React from 'react';

export interface LanCloudMoonRainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMoonRain: React.FC<LanCloudMoonRainProps>;
export default LanCloudMoonRain;
