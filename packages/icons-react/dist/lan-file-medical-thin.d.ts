import React from 'react';

export interface LanFileMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMedicalThin: React.FC<LanFileMedicalThinProps>;
export default LanFileMedicalThin;
