import React from 'react';

export interface LanClockFourThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockFourThirty(props: LanClockFourThirtyProps): React.ReactElement;
export default LanClockFourThirty;
