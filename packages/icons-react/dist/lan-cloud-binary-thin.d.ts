import React from 'react';

export interface LanCloudBinaryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudBinaryThin: React.FC<LanCloudBinaryThinProps>;
export default LanCloudBinaryThin;
