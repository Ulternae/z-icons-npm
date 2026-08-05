import React from 'react';

export interface LanClockFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockFourSolid(props: LanClockFourSolidProps): React.ReactElement;
export default LanClockFourSolid;
