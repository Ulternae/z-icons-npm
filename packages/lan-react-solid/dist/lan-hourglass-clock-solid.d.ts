import React from 'react';

export interface LanHourglassClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglassClockSolid(props: LanHourglassClockSolidProps): React.ReactElement;
export default LanHourglassClockSolid;
