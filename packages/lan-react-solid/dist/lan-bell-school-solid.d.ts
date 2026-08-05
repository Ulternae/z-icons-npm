import React from 'react';

export interface LanBellSchoolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellSchoolSolid(props: LanBellSchoolSolidProps): React.ReactElement;
export default LanBellSchoolSolid;
