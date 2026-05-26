import React from 'react';

export interface LanToggleLargeOffThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleLargeOffThin: React.FC<LanToggleLargeOffThinProps>;
export default LanToggleLargeOffThin;
