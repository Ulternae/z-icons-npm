import React from 'react';

export interface LanHeartCircleBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCircleBoltThin: React.FC<LanHeartCircleBoltThinProps>;
export default LanHeartCircleBoltThin;
