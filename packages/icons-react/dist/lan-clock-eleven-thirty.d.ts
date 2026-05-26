import React from 'react';

export interface LanClockElevenThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockElevenThirty: React.FC<LanClockElevenThirtyProps>;
export default LanClockElevenThirty;
