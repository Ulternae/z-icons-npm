import React from 'react';

export interface LanHospitalUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHospitalUser(props: LanHospitalUserProps): React.ReactElement;
export default LanHospitalUser;
