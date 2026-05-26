import React from 'react';

export interface LanNoteMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoteMedicalSolid: React.FC<LanNoteMedicalSolidProps>;
export default LanNoteMedicalSolid;
