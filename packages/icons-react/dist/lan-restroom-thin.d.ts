import React from 'react';

export interface LanRestroomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRestroomThin: React.FC<LanRestroomThinProps>;
export default LanRestroomThin;
