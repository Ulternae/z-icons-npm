import React from 'react';

export interface LanBellSchoolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellSchoolThin: React.FC<LanBellSchoolThinProps>;
export default LanBellSchoolThin;
