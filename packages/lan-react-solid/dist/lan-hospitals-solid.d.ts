import React from 'react';

export interface LanHospitalsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHospitalsSolid(props: LanHospitalsSolidProps): React.ReactElement;
export default LanHospitalsSolid;
