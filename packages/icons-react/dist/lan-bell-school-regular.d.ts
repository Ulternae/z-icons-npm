import React from 'react';

export interface LanBellSchoolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellSchoolRegular: React.FC<LanBellSchoolRegularProps>;
export default LanBellSchoolRegular;
