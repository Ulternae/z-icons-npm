import React from 'react';

export interface LanSunCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunCloud: React.FC<LanSunCloudProps>;
export default LanSunCloud;
