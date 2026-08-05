import React from 'react';

export interface LanStaffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStaffSolid(props: LanStaffSolidProps): React.ReactElement;
export default LanStaffSolid;
