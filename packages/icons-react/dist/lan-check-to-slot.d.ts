import React from 'react';

export interface LanCheckToSlotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckToSlot: React.FC<LanCheckToSlotProps>;
export default LanCheckToSlot;
