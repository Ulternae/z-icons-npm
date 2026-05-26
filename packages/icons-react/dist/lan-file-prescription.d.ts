import React from 'react';

export interface LanFilePrescriptionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePrescription: React.FC<LanFilePrescriptionProps>;
export default LanFilePrescription;
