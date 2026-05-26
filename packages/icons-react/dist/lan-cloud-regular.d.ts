import React from 'react';

export interface LanCloudRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudRegular: React.FC<LanCloudRegularProps>;
export default LanCloudRegular;
