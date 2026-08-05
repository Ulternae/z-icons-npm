import React from 'react';

export interface LanTruckMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckMedicalSolid(props: LanTruckMedicalSolidProps): React.ReactElement;
export default LanTruckMedicalSolid;
