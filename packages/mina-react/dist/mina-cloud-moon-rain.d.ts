import React from 'react';

export interface MinaCloudMoonRainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudMoonRain(props: MinaCloudMoonRainProps): React.ReactElement;
export default MinaCloudMoonRain;
