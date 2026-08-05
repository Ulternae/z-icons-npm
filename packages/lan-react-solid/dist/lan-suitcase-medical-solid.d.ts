import React from 'react';

export interface LanSuitcaseMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuitcaseMedicalSolid(props: LanSuitcaseMedicalSolidProps): React.ReactElement;
export default LanSuitcaseMedicalSolid;
