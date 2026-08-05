import React from 'react';

export interface LanSlotMachineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlotMachineRegular(props: LanSlotMachineRegularProps): React.ReactElement;
export default LanSlotMachineRegular;
