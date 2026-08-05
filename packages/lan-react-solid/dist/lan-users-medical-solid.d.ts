import React from 'react';

export interface LanUsersMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersMedicalSolid(props: LanUsersMedicalSolidProps): React.ReactElement;
export default LanUsersMedicalSolid;
