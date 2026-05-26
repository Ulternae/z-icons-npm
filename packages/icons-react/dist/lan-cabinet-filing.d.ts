import React from 'react';

export interface LanCabinetFilingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCabinetFiling: React.FC<LanCabinetFilingProps>;
export default LanCabinetFiling;
