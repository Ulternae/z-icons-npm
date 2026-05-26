import React from 'react';

export interface LanFlyingDiscThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlyingDiscThin: React.FC<LanFlyingDiscThinProps>;
export default LanFlyingDiscThin;
