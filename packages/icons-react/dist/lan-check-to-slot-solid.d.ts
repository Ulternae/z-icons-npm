import React from 'react';

export interface LanCheckToSlotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckToSlotSolid: React.FC<LanCheckToSlotSolidProps>;
export default LanCheckToSlotSolid;
