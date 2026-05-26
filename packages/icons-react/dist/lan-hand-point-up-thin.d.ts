import React from 'react';

export interface LanHandPointUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointUpThin: React.FC<LanHandPointUpThinProps>;
export default LanHandPointUpThin;
