import React from 'react';

export interface LanBusSchoolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusSchoolThin(props: LanBusSchoolThinProps): React.ReactElement;
export default LanBusSchoolThin;
