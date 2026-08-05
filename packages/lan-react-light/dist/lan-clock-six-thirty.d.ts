import React from 'react';

export interface LanClockSixThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockSixThirty(props: LanClockSixThirtyProps): React.ReactElement;
export default LanClockSixThirty;
