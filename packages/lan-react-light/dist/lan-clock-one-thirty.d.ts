import React from 'react';

export interface LanClockOneThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockOneThirty(props: LanClockOneThirtyProps): React.ReactElement;
export default LanClockOneThirty;
