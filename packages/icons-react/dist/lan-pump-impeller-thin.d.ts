import React from 'react';

export interface LanPumpImpellerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpImpellerThin: React.FC<LanPumpImpellerThinProps>;
export default LanPumpImpellerThin;
