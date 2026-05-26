import React from 'react';

export interface LanBalloonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalloonSolid: React.FC<LanBalloonSolidProps>;
export default LanBalloonSolid;
