import React from 'react';

export interface LanHospitalUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHospitalUserThin(props: LanHospitalUserThinProps): React.ReactElement;
export default LanHospitalUserThin;
