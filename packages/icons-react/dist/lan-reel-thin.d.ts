import React from 'react';

export interface LanReelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReelThin: React.FC<LanReelThinProps>;
export default LanReelThin;
