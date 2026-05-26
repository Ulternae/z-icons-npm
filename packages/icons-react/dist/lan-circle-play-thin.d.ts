import React from 'react';

export interface LanCirclePlayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePlayThin: React.FC<LanCirclePlayThinProps>;
export default LanCirclePlayThin;
