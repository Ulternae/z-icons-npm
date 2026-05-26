import React from 'react';

export interface LanChildReachingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildReachingThin: React.FC<LanChildReachingThinProps>;
export default LanChildReachingThin;
