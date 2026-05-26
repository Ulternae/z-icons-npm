import React from 'react';

export interface LanSunCloudRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunCloudRegular: React.FC<LanSunCloudRegularProps>;
export default LanSunCloudRegular;
