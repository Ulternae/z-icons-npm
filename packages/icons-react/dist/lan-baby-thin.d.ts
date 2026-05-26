import React from 'react';

export interface LanBabyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBabyThin: React.FC<LanBabyThinProps>;
export default LanBabyThin;
