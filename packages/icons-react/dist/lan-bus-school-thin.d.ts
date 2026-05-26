import React from 'react';

export interface LanBusSchoolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusSchoolThin: React.FC<LanBusSchoolThinProps>;
export default LanBusSchoolThin;
