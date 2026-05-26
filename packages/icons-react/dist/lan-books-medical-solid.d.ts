import React from 'react';

export interface LanBooksMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBooksMedicalSolid: React.FC<LanBooksMedicalSolidProps>;
export default LanBooksMedicalSolid;
