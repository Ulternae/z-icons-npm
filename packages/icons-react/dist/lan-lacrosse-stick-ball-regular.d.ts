import React from 'react';

export interface LanLacrosseStickBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLacrosseStickBallRegular: React.FC<LanLacrosseStickBallRegularProps>;
export default LanLacrosseStickBallRegular;
