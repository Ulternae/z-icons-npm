import React from 'react';

export interface LanDesktopMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopMedical: React.FC<LanDesktopMedicalProps>;
export default LanDesktopMedical;
