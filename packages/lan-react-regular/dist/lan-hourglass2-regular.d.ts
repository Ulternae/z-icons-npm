import React from 'react';

export interface LanHourglass2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglass2Regular(props: LanHourglass2RegularProps): React.ReactElement;
export default LanHourglass2Regular;
