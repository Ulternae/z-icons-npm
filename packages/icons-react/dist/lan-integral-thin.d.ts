import React from 'react';

export interface LanIntegralThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIntegralThin: React.FC<LanIntegralThinProps>;
export default LanIntegralThin;
