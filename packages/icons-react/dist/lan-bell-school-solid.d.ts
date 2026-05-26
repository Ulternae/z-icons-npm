import React from 'react';

export interface LanBellSchoolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellSchoolSolid: React.FC<LanBellSchoolSolidProps>;
export default LanBellSchoolSolid;
