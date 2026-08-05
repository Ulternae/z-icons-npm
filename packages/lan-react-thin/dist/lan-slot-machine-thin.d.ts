import React from 'react';

export interface LanSlotMachineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlotMachineThin(props: LanSlotMachineThinProps): React.ReactElement;
export default LanSlotMachineThin;
