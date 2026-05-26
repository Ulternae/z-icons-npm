import React from 'react';

export interface LanPumpImpellerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpImpellerSolid: React.FC<LanPumpImpellerSolidProps>;
export default LanPumpImpellerSolid;
