import React from 'react';

export interface LanCloudRainRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudRainRegular(props: LanCloudRainRegularProps): React.ReactElement;
export default LanCloudRainRegular;
