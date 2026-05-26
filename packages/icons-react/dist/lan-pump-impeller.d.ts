import React from 'react';

export interface LanPumpImpellerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpImpeller: React.FC<LanPumpImpellerProps>;
export default LanPumpImpeller;
