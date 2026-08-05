import React from 'react';

export interface LanClockOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockOneSolid(props: LanClockOneSolidProps): React.ReactElement;
export default LanClockOneSolid;
