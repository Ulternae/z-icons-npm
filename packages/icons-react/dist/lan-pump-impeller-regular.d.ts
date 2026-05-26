import React from 'react';

export interface LanPumpImpellerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpImpellerRegular: React.FC<LanPumpImpellerRegularProps>;
export default LanPumpImpellerRegular;
