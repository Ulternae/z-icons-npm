import React from 'react';

export interface LanHospitalsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHospitals(props: LanHospitalsProps): React.ReactElement;
export default LanHospitals;
