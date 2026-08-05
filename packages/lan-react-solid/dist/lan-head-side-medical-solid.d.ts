import React from 'react';

export interface LanHeadSideMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideMedicalSolid(props: LanHeadSideMedicalSolidProps): React.ReactElement;
export default LanHeadSideMedicalSolid;
