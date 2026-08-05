import React from 'react';

export interface LanHospitalUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHospitalUserSolid(props: LanHospitalUserSolidProps): React.ReactElement;
export default LanHospitalUserSolid;
