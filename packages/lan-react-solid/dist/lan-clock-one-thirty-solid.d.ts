import React from 'react';

export interface LanClockOneThirtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockOneThirtySolid(props: LanClockOneThirtySolidProps): React.ReactElement;
export default LanClockOneThirtySolid;
