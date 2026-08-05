import React from 'react';

export interface LanClockTenThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTenThirty(props: LanClockTenThirtyProps): React.ReactElement;
export default LanClockTenThirty;
