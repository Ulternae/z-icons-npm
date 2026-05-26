import React from 'react';

export interface LanBookMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookMedicalSolid: React.FC<LanBookMedicalSolidProps>;
export default LanBookMedicalSolid;
