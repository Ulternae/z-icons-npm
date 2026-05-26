import React from 'react';

export interface LanRulerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerThin: React.FC<LanRulerThinProps>;
export default LanRulerThin;
