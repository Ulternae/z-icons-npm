import React from 'react';

export interface LanCoffinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffinThin: React.FC<LanCoffinThinProps>;
export default LanCoffinThin;
