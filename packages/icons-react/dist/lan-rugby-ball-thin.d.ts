import React from 'react';

export interface LanRugbyBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRugbyBallThin: React.FC<LanRugbyBallThinProps>;
export default LanRugbyBallThin;
