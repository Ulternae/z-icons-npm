import React from 'react';

export interface LanTirePressureWarningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTirePressureWarningThin: React.FC<LanTirePressureWarningThinProps>;
export default LanTirePressureWarningThin;
