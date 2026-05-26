import React from 'react';

export interface LanHandBackPointUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandBackPointUpThin: React.FC<LanHandBackPointUpThinProps>;
export default LanHandBackPointUpThin;
