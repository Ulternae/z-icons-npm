import React from 'react';

export interface LanHourglass1SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglass1Solid(props: LanHourglass1SolidProps): React.ReactElement;
export default LanHourglass1Solid;
