import React from 'react';

export interface LanClockTwoThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTwoThirty(props: LanClockTwoThirtyProps): React.ReactElement;
export default LanClockTwoThirty;
