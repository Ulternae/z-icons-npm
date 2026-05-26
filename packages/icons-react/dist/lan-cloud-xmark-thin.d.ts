import React from 'react';

export interface LanCloudXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudXmarkThin: React.FC<LanCloudXmarkThinProps>;
export default LanCloudXmarkThin;
