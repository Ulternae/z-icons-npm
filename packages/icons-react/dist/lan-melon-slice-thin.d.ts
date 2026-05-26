import React from 'react';

export interface LanMelonSliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMelonSliceThin: React.FC<LanMelonSliceThinProps>;
export default LanMelonSliceThin;
