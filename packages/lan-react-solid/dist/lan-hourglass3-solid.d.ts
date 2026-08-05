import React from 'react';

export interface LanHourglass3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglass3Solid(props: LanHourglass3SolidProps): React.ReactElement;
export default LanHourglass3Solid;
