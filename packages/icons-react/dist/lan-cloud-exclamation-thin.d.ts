import React from 'react';

export interface LanCloudExclamationThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudExclamationThin: React.FC<LanCloudExclamationThinProps>;
export default LanCloudExclamationThin;
