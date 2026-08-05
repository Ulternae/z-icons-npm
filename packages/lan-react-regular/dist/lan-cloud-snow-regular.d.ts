import React from 'react';

export interface LanCloudSnowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSnowRegular(props: LanCloudSnowRegularProps): React.ReactElement;
export default LanCloudSnowRegular;
