import React from 'react';

export interface LanCloudMeatballThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMeatballThin: React.FC<LanCloudMeatballThinProps>;
export default LanCloudMeatballThin;
