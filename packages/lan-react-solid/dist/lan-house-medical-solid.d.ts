import React from 'react';

export interface LanHouseMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseMedicalSolid(props: LanHouseMedicalSolidProps): React.ReactElement;
export default LanHouseMedicalSolid;
