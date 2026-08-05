import React from 'react';

export interface LanClockTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTwoSolid(props: LanClockTwoSolidProps): React.ReactElement;
export default LanClockTwoSolid;
