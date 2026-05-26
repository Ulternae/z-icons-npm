import React from 'react';

export interface LanCrowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrowThin: React.FC<LanCrowThinProps>;
export default LanCrowThin;
