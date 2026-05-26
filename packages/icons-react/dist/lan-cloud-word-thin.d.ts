import React from 'react';

export interface LanCloudWordThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudWordThin: React.FC<LanCloudWordThinProps>;
export default LanCloudWordThin;
