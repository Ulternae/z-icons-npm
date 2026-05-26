import React from 'react';

export interface LanClockOneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockOneThin: React.FC<LanClockOneThinProps>;
export default LanClockOneThin;
