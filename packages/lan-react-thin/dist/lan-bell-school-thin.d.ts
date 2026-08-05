import React from 'react';

export interface LanBellSchoolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellSchoolThin(props: LanBellSchoolThinProps): React.ReactElement;
export default LanBellSchoolThin;
