import React from 'react';

export interface LanCabinetFilingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCabinetFilingRegular: React.FC<LanCabinetFilingRegularProps>;
export default LanCabinetFilingRegular;
