import React from 'react';

export interface LanClockTenThirtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTenThirtySolid(props: LanClockTenThirtySolidProps): React.ReactElement;
export default LanClockTenThirtySolid;
