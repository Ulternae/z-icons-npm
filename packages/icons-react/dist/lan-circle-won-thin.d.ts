import React from 'react';

export interface LanCircleWonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWonThin: React.FC<LanCircleWonThinProps>;
export default LanCircleWonThin;
