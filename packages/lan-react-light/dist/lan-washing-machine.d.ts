import React from 'react';

export interface LanWashingMachineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWashingMachine(props: LanWashingMachineProps): React.ReactElement;
export default LanWashingMachine;
