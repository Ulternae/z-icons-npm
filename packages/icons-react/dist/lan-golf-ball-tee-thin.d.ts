import React from 'react';

export interface LanGolfBallTeeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGolfBallTeeThin: React.FC<LanGolfBallTeeThinProps>;
export default LanGolfBallTeeThin;
