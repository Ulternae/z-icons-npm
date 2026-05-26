import React from 'react';

export interface LanEyeDropperHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeDropperHalfThin: React.FC<LanEyeDropperHalfThinProps>;
export default LanEyeDropperHalfThin;
