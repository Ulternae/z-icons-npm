import React from 'react';

export interface LanBellSchoolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellSchool(props: LanBellSchoolProps): React.ReactElement;
export default LanBellSchool;
