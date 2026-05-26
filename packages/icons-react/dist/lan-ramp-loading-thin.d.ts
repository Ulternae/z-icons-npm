import React from 'react';

export interface LanRampLoadingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRampLoadingThin: React.FC<LanRampLoadingThinProps>;
export default LanRampLoadingThin;
