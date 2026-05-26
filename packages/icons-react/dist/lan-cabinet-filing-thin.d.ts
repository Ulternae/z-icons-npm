import React from 'react';

export interface LanCabinetFilingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCabinetFilingThin: React.FC<LanCabinetFilingThinProps>;
export default LanCabinetFilingThin;
