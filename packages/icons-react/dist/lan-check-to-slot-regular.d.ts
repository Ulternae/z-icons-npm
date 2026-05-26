import React from 'react';

export interface LanCheckToSlotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckToSlotRegular: React.FC<LanCheckToSlotRegularProps>;
export default LanCheckToSlotRegular;
