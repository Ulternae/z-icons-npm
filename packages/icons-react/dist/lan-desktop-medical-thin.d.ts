import React from 'react';

export interface LanDesktopMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopMedicalThin: React.FC<LanDesktopMedicalThinProps>;
export default LanDesktopMedicalThin;
