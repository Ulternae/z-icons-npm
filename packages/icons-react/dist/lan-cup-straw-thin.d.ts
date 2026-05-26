import React from 'react';

export interface LanCupStrawThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupStrawThin: React.FC<LanCupStrawThinProps>;
export default LanCupStrawThin;
