import React from 'react';

export interface LanLacrosseStickBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLacrosseStickBallSolid: React.FC<LanLacrosseStickBallSolidProps>;
export default LanLacrosseStickBallSolid;
