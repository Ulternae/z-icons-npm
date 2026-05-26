import React from 'react';

export interface LanSlotMachineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlotMachineRegular: React.FC<LanSlotMachineRegularProps>;
export default LanSlotMachineRegular;
