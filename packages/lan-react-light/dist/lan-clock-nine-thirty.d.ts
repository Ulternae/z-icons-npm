import React from 'react';

export interface LanClockNineThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockNineThirty(props: LanClockNineThirtyProps): React.ReactElement;
export default LanClockNineThirty;
