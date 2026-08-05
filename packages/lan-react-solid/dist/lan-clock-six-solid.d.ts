import React from 'react';

export interface LanClockSixSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockSixSolid(props: LanClockSixSolidProps): React.ReactElement;
export default LanClockSixSolid;
