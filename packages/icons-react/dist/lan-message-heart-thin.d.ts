import React from 'react';

export interface LanMessageHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageHeartThin: React.FC<LanMessageHeartThinProps>;
export default LanMessageHeartThin;
