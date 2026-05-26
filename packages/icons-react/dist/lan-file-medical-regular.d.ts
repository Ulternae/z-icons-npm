import React from 'react';

export interface LanFileMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMedicalRegular: React.FC<LanFileMedicalRegularProps>;
export default LanFileMedicalRegular;
