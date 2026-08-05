import React from 'react';

export interface LanCloudRainbowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudRainbow(props: LanCloudRainbowProps): React.ReactElement;
export default LanCloudRainbow;
