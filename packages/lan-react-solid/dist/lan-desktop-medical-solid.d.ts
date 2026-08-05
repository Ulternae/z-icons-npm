import React from 'react';

export interface LanDesktopMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDesktopMedicalSolid(props: LanDesktopMedicalSolidProps): React.ReactElement;
export default LanDesktopMedicalSolid;
