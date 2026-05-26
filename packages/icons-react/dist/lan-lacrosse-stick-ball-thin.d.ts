import React from 'react';

export interface LanLacrosseStickBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLacrosseStickBallThin: React.FC<LanLacrosseStickBallThinProps>;
export default LanLacrosseStickBallThin;
