import React from 'react';

export interface LanHouseChimneyMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseChimneyMedical: React.FC<LanHouseChimneyMedicalProps>;
export default LanHouseChimneyMedical;
