import React from 'react';

export interface LanBusSchoolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusSchoolRegular: React.FC<LanBusSchoolRegularProps>;
export default LanBusSchoolRegular;
