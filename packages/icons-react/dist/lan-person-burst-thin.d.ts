import React from 'react';

export interface LanPersonBurstThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBurstThin: React.FC<LanPersonBurstThinProps>;
export default LanPersonBurstThin;
