import React from 'react';

export interface LanBallPileThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallPileThin: React.FC<LanBallPileThinProps>;
export default LanBallPileThin;
