import React from 'react';

export interface LanStaffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStaff(props: LanStaffProps): React.ReactElement;
export default LanStaff;
