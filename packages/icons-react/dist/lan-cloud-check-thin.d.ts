import React from 'react';

export interface LanCloudCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudCheckThin: React.FC<LanCloudCheckThinProps>;
export default LanCloudCheckThin;
