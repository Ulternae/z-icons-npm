import React from 'react';

export interface LanToggleOffThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleOffThin: React.FC<LanToggleOffThinProps>;
export default LanToggleOffThin;
