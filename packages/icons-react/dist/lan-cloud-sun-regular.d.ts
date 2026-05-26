import React from 'react';

export interface LanCloudSunRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSunRegular: React.FC<LanCloudSunRegularProps>;
export default LanCloudSunRegular;
