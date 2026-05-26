import React from 'react';

export interface LanCloudExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudExclamation: React.FC<LanCloudExclamationProps>;
export default LanCloudExclamation;
