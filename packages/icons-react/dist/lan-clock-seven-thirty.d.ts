import React from 'react';

export interface LanClockSevenThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSevenThirty: React.FC<LanClockSevenThirtyProps>;
export default LanClockSevenThirty;
