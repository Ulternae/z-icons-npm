import React from 'react';

export interface LanFilePrescriptionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePrescriptionThin: React.FC<LanFilePrescriptionThinProps>;
export default LanFilePrescriptionThin;
