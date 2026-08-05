import React from 'react';

export interface LanFileMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMedicalSolid(props: LanFileMedicalSolidProps): React.ReactElement;
export default LanFileMedicalSolid;
