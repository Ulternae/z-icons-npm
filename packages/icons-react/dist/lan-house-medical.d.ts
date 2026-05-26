import React from 'react';

export interface LanHouseMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseMedical: React.FC<LanHouseMedicalProps>;
export default LanHouseMedical;
