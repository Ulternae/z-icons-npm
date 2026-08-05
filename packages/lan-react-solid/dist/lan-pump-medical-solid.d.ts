import React from 'react';

export interface LanPumpMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpMedicalSolid(props: LanPumpMedicalSolidProps): React.ReactElement;
export default LanPumpMedicalSolid;
