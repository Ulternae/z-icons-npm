import React from 'react';

export interface LanMelonSliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMelonSlice: React.FC<LanMelonSliceProps>;
export default LanMelonSlice;
