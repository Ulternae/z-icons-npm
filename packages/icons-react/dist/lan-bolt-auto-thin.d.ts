import React from 'react';

export interface LanBoltAutoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoltAutoThin: React.FC<LanBoltAutoThinProps>;
export default LanBoltAutoThin;
