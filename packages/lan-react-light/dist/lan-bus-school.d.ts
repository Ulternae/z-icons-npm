import React from 'react';

export interface LanBusSchoolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusSchool(props: LanBusSchoolProps): React.ReactElement;
export default LanBusSchool;
