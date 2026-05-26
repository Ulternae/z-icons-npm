import React from 'react';

export interface LanCloudDrizzleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudDrizzleRegular: React.FC<LanCloudDrizzleRegularProps>;
export default LanCloudDrizzleRegular;
