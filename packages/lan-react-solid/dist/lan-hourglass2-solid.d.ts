import React from 'react';

export interface LanHourglass2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglass2Solid(props: LanHourglass2SolidProps): React.ReactElement;
export default LanHourglass2Solid;
