import React from 'react';

export interface LanBusSchoolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusSchoolRegular(props: LanBusSchoolRegularProps): React.ReactElement;
export default LanBusSchoolRegular;
