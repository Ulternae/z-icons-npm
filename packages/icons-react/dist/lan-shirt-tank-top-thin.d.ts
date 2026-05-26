import React from 'react';

export interface LanShirtTankTopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtTankTopThin: React.FC<LanShirtTankTopThinProps>;
export default LanShirtTankTopThin;
