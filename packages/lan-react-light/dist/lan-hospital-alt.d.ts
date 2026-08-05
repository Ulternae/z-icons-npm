import React from 'react';

export interface LanHospitalAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHospitalAlt(props: LanHospitalAltProps): React.ReactElement;
export default LanHospitalAlt;
