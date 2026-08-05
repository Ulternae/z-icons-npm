import React from 'react';

export interface MinaCloudRainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudRain(props: MinaCloudRainProps): React.ReactElement;
export default MinaCloudRain;
