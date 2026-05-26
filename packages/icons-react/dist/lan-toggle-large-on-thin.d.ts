import React from 'react';

export interface LanToggleLargeOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleLargeOnThin: React.FC<LanToggleLargeOnThinProps>;
export default LanToggleLargeOnThin;
