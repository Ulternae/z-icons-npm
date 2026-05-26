import React from 'react';

export interface LanCowbellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCowbellThin: React.FC<LanCowbellThinProps>;
export default LanCowbellThin;
