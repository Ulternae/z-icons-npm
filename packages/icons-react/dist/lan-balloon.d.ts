import React from 'react';

export interface LanBalloonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalloon: React.FC<LanBalloonProps>;
export default LanBalloon;
