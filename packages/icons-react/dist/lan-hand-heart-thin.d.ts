import React from 'react';

export interface LanHandHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHeartThin: React.FC<LanHandHeartThinProps>;
export default LanHandHeartThin;
