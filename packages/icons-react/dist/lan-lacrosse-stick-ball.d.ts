import React from 'react';

export interface LanLacrosseStickBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLacrosseStickBall: React.FC<LanLacrosseStickBallProps>;
export default LanLacrosseStickBall;
