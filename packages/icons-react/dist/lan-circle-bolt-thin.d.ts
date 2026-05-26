import React from 'react';

export interface LanCircleBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBoltThin: React.FC<LanCircleBoltThinProps>;
export default LanCircleBoltThin;
