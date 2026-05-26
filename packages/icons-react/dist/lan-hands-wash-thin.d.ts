import React from 'react';

export interface LanHandsWashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsWashThin: React.FC<LanHandsWashThinProps>;
export default LanHandsWashThin;
