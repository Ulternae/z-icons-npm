import React from 'react';

export interface LanCloudMoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMoonRegular: React.FC<LanCloudMoonRegularProps>;
export default LanCloudMoonRegular;
