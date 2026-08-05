import React from 'react';

export interface LanClockTwelveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTwelveSolid(props: LanClockTwelveSolidProps): React.ReactElement;
export default LanClockTwelveSolid;
