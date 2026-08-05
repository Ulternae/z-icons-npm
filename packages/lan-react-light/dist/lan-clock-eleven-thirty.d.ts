import React from 'react';

export interface LanClockElevenThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockElevenThirty(props: LanClockElevenThirtyProps): React.ReactElement;
export default LanClockElevenThirty;
