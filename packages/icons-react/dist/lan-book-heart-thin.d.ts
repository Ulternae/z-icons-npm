import React from 'react';

export interface LanBookHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookHeartThin: React.FC<LanBookHeartThinProps>;
export default LanBookHeartThin;
