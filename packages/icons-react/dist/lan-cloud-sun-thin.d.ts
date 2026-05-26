import React from 'react';

export interface LanCloudSunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSunThin: React.FC<LanCloudSunThinProps>;
export default LanCloudSunThin;
