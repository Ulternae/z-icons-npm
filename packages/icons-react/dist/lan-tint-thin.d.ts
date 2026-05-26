import React from 'react';

export interface LanTintThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTintThin: React.FC<LanTintThinProps>;
export default LanTintThin;
