import React from 'react';

export interface LanCloudHailThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudHailThin: React.FC<LanCloudHailThinProps>;
export default LanCloudHailThin;
