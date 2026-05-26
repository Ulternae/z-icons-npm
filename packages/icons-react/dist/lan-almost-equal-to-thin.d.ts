import React from 'react';

export interface LanAlmostEqualToThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlmostEqualToThin: React.FC<LanAlmostEqualToThinProps>;
export default LanAlmostEqualToThin;
