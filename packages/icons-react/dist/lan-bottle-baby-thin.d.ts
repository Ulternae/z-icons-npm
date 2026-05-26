import React from 'react';

export interface LanBottleBabyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBottleBabyThin: React.FC<LanBottleBabyThinProps>;
export default LanBottleBabyThin;
