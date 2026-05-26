import React from 'react';

export interface LanCloudMeatballRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMeatballRegular: React.FC<LanCloudMeatballRegularProps>;
export default LanCloudMeatballRegular;
