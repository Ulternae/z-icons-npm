import React from 'react';

export interface LanBalloonsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalloonsThin: React.FC<LanBalloonsThinProps>;
export default LanBalloonsThin;
