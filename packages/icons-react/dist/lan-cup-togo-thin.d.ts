import React from 'react';

export interface LanCupTogoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupTogoThin: React.FC<LanCupTogoThinProps>;
export default LanCupTogoThin;
