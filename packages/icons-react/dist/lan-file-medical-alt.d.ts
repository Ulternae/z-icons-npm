import React from 'react';

export interface LanFileMedicalAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMedicalAlt: React.FC<LanFileMedicalAltProps>;
export default LanFileMedicalAlt;
