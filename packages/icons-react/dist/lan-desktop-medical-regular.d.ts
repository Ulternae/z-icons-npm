import React from 'react';

export interface LanDesktopMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopMedicalRegular: React.FC<LanDesktopMedicalRegularProps>;
export default LanDesktopMedicalRegular;
