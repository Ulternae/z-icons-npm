import React from 'react';

export interface LanSlotMachineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlotMachine(props: LanSlotMachineProps): React.ReactElement;
export default LanSlotMachine;
