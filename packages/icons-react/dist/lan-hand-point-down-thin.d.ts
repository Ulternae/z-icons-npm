import React from 'react';

export interface LanHandPointDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointDownThin: React.FC<LanHandPointDownThinProps>;
export default LanHandPointDownThin;
