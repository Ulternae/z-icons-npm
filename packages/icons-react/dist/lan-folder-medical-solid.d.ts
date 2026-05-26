import React from 'react';

export interface LanFolderMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderMedicalSolid: React.FC<LanFolderMedicalSolidProps>;
export default LanFolderMedicalSolid;
