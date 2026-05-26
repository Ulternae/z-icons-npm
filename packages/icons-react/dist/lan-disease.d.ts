import React from 'react';

export interface LanDiseaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDisease: React.FC<LanDiseaseProps>;
export default LanDisease;
