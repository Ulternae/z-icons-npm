import React from 'react';

export interface LanFilePrescriptionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePrescriptionRegular: React.FC<LanFilePrescriptionRegularProps>;
export default LanFilePrescriptionRegular;
