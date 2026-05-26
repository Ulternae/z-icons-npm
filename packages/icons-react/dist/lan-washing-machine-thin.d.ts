import React from 'react';

export interface LanWashingMachineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWashingMachineThin: React.FC<LanWashingMachineThinProps>;
export default LanWashingMachineThin;
