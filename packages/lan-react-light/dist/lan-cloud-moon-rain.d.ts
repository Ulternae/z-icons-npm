import React from 'react';

export interface LanCloudMoonRainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMoonRain(props: LanCloudMoonRainProps): React.ReactElement;
export default LanCloudMoonRain;
