import React from 'react';

export interface LanClockNineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockNineThin: React.FC<LanClockNineThinProps>;
export default LanClockNineThin;
