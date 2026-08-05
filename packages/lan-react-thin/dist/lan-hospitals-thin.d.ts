import React from 'react';

export interface LanHospitalsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHospitalsThin(props: LanHospitalsThinProps): React.ReactElement;
export default LanHospitalsThin;
