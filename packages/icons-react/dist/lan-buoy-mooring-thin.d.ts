import React from 'react';

export interface LanBuoyMooringThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuoyMooringThin: React.FC<LanBuoyMooringThinProps>;
export default LanBuoyMooringThin;
