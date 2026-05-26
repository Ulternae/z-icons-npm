import React from 'react';

export interface LanFilesMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilesMedicalSolid: React.FC<LanFilesMedicalSolidProps>;
export default LanFilesMedicalSolid;
