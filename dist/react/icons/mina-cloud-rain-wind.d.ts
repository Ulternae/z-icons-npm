import React from 'react';

export interface MinaCloudRainWindProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudRainWind: React.FC<MinaCloudRainWindProps>;
export default MinaCloudRainWind;
