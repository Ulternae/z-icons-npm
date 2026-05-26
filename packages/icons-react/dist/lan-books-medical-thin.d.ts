import React from 'react';

export interface LanBooksMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBooksMedicalThin: React.FC<LanBooksMedicalThinProps>;
export default LanBooksMedicalThin;
