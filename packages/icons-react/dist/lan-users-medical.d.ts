import React from 'react';

export interface LanUsersMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersMedical: React.FC<LanUsersMedicalProps>;
export default LanUsersMedical;
