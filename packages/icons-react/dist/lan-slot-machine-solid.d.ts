import React from 'react';

export interface LanSlotMachineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlotMachineSolid: React.FC<LanSlotMachineSolidProps>;
export default LanSlotMachineSolid;
