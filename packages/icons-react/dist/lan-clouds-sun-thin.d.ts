import React from 'react';

export interface LanCloudsSunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudsSunThin: React.FC<LanCloudsSunThinProps>;
export default LanCloudsSunThin;
