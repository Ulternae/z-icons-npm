import React from 'react';

export interface LanPenFieldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenFieldThin: React.FC<LanPenFieldThinProps>;
export default LanPenFieldThin;
