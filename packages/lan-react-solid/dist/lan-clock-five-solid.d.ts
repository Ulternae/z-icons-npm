import React from 'react';

export interface LanClockFiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockFiveSolid(props: LanClockFiveSolidProps): React.ReactElement;
export default LanClockFiveSolid;
