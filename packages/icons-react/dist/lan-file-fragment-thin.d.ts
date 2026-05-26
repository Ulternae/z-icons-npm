import React from 'react';

export interface LanFileFragmentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileFragmentThin: React.FC<LanFileFragmentThinProps>;
export default LanFileFragmentThin;
