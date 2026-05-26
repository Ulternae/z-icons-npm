import React from 'react';

export interface LanBusSchoolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusSchool: React.FC<LanBusSchoolProps>;
export default LanBusSchool;
