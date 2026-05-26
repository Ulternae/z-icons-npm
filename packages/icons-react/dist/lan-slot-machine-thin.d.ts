import React from 'react';

export interface LanSlotMachineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlotMachineThin: React.FC<LanSlotMachineThinProps>;
export default LanSlotMachineThin;
