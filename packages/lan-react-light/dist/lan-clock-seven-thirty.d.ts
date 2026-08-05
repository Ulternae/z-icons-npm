import React from 'react';

export interface LanClockSevenThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockSevenThirty(props: LanClockSevenThirtyProps): React.ReactElement;
export default LanClockSevenThirty;
