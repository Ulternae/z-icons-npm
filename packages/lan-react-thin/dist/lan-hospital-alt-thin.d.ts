import React from 'react';

export interface LanHospitalAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHospitalAltThin(props: LanHospitalAltThinProps): React.ReactElement;
export default LanHospitalAltThin;
