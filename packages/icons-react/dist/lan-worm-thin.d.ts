import React from 'react';

export interface LanWormThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWormThin: React.FC<LanWormThinProps>;
export default LanWormThin;
