import React from 'react';

export interface LanStaffThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStaffThin(props: LanStaffThinProps): React.ReactElement;
export default LanStaffThin;
