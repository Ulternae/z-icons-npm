import React from 'react';

export interface LanWalkerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWalkerThin: React.FC<LanWalkerThinProps>;
export default LanWalkerThin;
