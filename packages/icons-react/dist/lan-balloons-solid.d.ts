import React from 'react';

export interface LanBalloonsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalloonsSolid: React.FC<LanBalloonsSolidProps>;
export default LanBalloonsSolid;
