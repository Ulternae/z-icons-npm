import React from 'react';

export interface LanBusSchoolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusSchoolSolid: React.FC<LanBusSchoolSolidProps>;
export default LanBusSchoolSolid;
