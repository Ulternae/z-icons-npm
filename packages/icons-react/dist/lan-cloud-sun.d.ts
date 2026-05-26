import React from 'react';

export interface LanCloudSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSun: React.FC<LanCloudSunProps>;
export default LanCloudSun;
