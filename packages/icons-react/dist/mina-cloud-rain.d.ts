import React from 'react';

export interface MinaCloudRainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudRain: React.FC<MinaCloudRainProps>;
export default MinaCloudRain;
