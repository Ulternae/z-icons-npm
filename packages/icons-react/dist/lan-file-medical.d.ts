import React from 'react';

export interface LanFileMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMedical: React.FC<LanFileMedicalProps>;
export default LanFileMedical;
