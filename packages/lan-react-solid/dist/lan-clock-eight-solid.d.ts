import React from 'react';

export interface LanClockEightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockEightSolid(props: LanClockEightSolidProps): React.ReactElement;
export default LanClockEightSolid;
