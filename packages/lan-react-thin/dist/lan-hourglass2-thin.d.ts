import React from 'react';

export interface LanHourglass2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglass2Thin(props: LanHourglass2ThinProps): React.ReactElement;
export default LanHourglass2Thin;
