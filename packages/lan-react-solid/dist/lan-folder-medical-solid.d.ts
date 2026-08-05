import React from 'react';

export interface LanFolderMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderMedicalSolid(props: LanFolderMedicalSolidProps): React.ReactElement;
export default LanFolderMedicalSolid;
