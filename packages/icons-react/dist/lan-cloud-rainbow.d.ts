import React from 'react';

export interface LanCloudRainbowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudRainbow: React.FC<LanCloudRainbowProps>;
export default LanCloudRainbow;
