import React from 'react';

export interface LanCircleBookOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBookOpenThin: React.FC<LanCircleBookOpenThinProps>;
export default LanCircleBookOpenThin;
