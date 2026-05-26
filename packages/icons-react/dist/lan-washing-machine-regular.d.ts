import React from 'react';

export interface LanWashingMachineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWashingMachineRegular: React.FC<LanWashingMachineRegularProps>;
export default LanWashingMachineRegular;
