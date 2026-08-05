import React from 'react';

export interface MinaCloudRainWindProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudRainWind(props: MinaCloudRainWindProps): React.ReactElement;
export default MinaCloudRainWind;
