import React from 'react';

export interface LanHotdogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHotdogThin: React.FC<LanHotdogThinProps>;
export default LanHotdogThin;
