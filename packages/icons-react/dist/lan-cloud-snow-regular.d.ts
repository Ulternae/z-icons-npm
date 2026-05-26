import React from 'react';

export interface LanCloudSnowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSnowRegular: React.FC<LanCloudSnowRegularProps>;
export default LanCloudSnowRegular;
