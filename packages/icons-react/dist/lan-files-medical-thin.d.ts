import React from 'react';

export interface LanFilesMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilesMedicalThin: React.FC<LanFilesMedicalThinProps>;
export default LanFilesMedicalThin;
