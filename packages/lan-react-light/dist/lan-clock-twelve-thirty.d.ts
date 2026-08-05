import React from 'react';

export interface LanClockTwelveThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTwelveThirty(props: LanClockTwelveThirtyProps): React.ReactElement;
export default LanClockTwelveThirty;
