import React from 'react';

export interface LanClockFourThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFourThirty: React.FC<LanClockFourThirtyProps>;
export default LanClockFourThirty;
