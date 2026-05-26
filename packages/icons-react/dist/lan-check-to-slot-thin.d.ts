import React from 'react';

export interface LanCheckToSlotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckToSlotThin: React.FC<LanCheckToSlotThinProps>;
export default LanCheckToSlotThin;
