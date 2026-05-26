import React from 'react';

export interface LanHouseMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseMedicalRegular: React.FC<LanHouseMedicalRegularProps>;
export default LanHouseMedicalRegular;
