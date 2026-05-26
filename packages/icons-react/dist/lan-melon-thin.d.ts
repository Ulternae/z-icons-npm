import React from 'react';

export interface LanMelonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMelonThin: React.FC<LanMelonThinProps>;
export default LanMelonThin;
