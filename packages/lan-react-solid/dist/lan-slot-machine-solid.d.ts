import React from 'react';

export interface LanSlotMachineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlotMachineSolid(props: LanSlotMachineSolidProps): React.ReactElement;
export default LanSlotMachineSolid;
