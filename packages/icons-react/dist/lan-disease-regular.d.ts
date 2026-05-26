import React from 'react';

export interface LanDiseaseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiseaseRegular: React.FC<LanDiseaseRegularProps>;
export default LanDiseaseRegular;
