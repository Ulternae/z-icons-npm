import React from 'react';

export interface LanStaffRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStaffRegular(props: LanStaffRegularProps): React.ReactElement;
export default LanStaffRegular;
