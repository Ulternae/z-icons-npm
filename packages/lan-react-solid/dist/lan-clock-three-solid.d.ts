import React from 'react';

export interface LanClockThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockThreeSolid(props: LanClockThreeSolidProps): React.ReactElement;
export default LanClockThreeSolid;
