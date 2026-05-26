import React from 'react';

export interface LanHandPointLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointLeftThin: React.FC<LanHandPointLeftThinProps>;
export default LanHandPointLeftThin;
