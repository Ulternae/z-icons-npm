import React from 'react';

export interface MinaCloudMoonRainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudMoonRain: React.FC<MinaCloudMoonRainProps>;
export default MinaCloudMoonRain;
