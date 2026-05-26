import React from 'react';

export interface LanMoonCloudRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonCloudRegular: React.FC<LanMoonCloudRegularProps>;
export default LanMoonCloudRegular;
