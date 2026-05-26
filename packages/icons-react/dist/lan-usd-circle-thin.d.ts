import React from 'react';

export interface LanUsdCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsdCircleThin: React.FC<LanUsdCircleThinProps>;
export default LanUsdCircleThin;
