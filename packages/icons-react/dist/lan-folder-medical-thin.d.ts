import React from 'react';

export interface LanFolderMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderMedicalThin: React.FC<LanFolderMedicalThinProps>;
export default LanFolderMedicalThin;
