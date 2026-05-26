import React from 'react';

export interface LanCloudThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudThin: React.FC<LanCloudThinProps>;
export default LanCloudThin;
