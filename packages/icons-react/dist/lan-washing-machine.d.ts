import React from 'react';

export interface LanWashingMachineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWashingMachine: React.FC<LanWashingMachineProps>;
export default LanWashingMachine;
