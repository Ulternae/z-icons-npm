import React from 'react';

export interface LanBellSchoolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellSchool: React.FC<LanBellSchoolProps>;
export default LanBellSchool;
