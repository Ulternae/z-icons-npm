import React from 'react';

export interface LanCloudRainbowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudRainbowRegular(props: LanCloudRainbowRegularProps): React.ReactElement;
export default LanCloudRainbowRegular;
