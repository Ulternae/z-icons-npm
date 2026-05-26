import React from 'react';

export interface LanWindsockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindsockThin: React.FC<LanWindsockThinProps>;
export default LanWindsockThin;
