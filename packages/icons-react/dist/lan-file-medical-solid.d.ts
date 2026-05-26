import React from 'react';

export interface LanFileMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMedicalSolid: React.FC<LanFileMedicalSolidProps>;
export default LanFileMedicalSolid;
