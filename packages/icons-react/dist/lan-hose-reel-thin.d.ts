import React from 'react';

export interface LanHoseReelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoseReelThin: React.FC<LanHoseReelThinProps>;
export default LanHoseReelThin;
