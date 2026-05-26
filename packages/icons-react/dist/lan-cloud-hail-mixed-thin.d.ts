import React from 'react';

export interface LanCloudHailMixedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudHailMixedThin: React.FC<LanCloudHailMixedThinProps>;
export default LanCloudHailMixedThin;
