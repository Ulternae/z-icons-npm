import React from 'react';

export interface LanCloudsMoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudsMoonThin: React.FC<LanCloudsMoonThinProps>;
export default LanCloudsMoonThin;
