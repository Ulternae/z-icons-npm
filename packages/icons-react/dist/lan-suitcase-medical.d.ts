import React from 'react';

export interface LanSuitcaseMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuitcaseMedical: React.FC<LanSuitcaseMedicalProps>;
export default LanSuitcaseMedical;
