import React from 'react';

export interface LanHammerBrushThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerBrushThin: React.FC<LanHammerBrushThinProps>;
export default LanHammerBrushThin;
