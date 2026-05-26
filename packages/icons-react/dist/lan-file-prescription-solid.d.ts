import React from 'react';

export interface LanFilePrescriptionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePrescriptionSolid: React.FC<LanFilePrescriptionSolidProps>;
export default LanFilePrescriptionSolid;
