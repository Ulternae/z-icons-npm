import React from 'react';

export interface LanTirePressureWarningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTirePressureWarning: React.FC<LanTirePressureWarningProps>;
export default LanTirePressureWarning;
