import React from 'react';

export interface LanCheckToSlotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckToSlot(props: LanCheckToSlotProps): React.ReactElement;
export default LanCheckToSlot;
