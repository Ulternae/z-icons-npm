import React from 'react';

export interface LanFlashlightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlashlightThin: React.FC<LanFlashlightThinProps>;
export default LanFlashlightThin;
