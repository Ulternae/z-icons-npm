import React from 'react';

export interface LanGolfBallTeeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGolfBallTeeSolid: React.FC<LanGolfBallTeeSolidProps>;
export default LanGolfBallTeeSolid;
