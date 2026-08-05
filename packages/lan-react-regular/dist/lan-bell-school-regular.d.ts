import React from 'react';

export interface LanBellSchoolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellSchoolRegular(props: LanBellSchoolRegularProps): React.ReactElement;
export default LanBellSchoolRegular;
