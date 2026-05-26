import React from 'react';

export interface LanDesktopMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopMedicalSolid: React.FC<LanDesktopMedicalSolidProps>;
export default LanDesktopMedicalSolid;
