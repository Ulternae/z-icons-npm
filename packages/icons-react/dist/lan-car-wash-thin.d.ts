import React from 'react';

export interface LanCarWashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarWashThin: React.FC<LanCarWashThinProps>;
export default LanCarWashThin;
