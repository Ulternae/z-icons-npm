import React from 'react';

export interface LanCloudMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMinusRegular: React.FC<LanCloudMinusRegularProps>;
export default LanCloudMinusRegular;
