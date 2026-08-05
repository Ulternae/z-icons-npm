import React from 'react';

export interface LanClockFiveThirtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockFiveThirtySolid(props: LanClockFiveThirtySolidProps): React.ReactElement;
export default LanClockFiveThirtySolid;
