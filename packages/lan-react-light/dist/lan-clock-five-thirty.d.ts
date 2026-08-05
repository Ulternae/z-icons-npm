import React from 'react';

export interface LanClockFiveThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockFiveThirty(props: LanClockFiveThirtyProps): React.ReactElement;
export default LanClockFiveThirty;
