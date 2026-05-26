import React from 'react';

export interface LanSlotMachineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlotMachine: React.FC<LanSlotMachineProps>;
export default LanSlotMachine;
