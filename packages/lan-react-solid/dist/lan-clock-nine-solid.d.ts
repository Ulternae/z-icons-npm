import React from 'react';

export interface LanClockNineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockNineSolid(props: LanClockNineSolidProps): React.ReactElement;
export default LanClockNineSolid;
