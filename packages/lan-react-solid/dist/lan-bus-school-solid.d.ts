import React from 'react';

export interface LanBusSchoolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusSchoolSolid(props: LanBusSchoolSolidProps): React.ReactElement;
export default LanBusSchoolSolid;
