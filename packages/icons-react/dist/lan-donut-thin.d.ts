import React from 'react';

export interface LanDonutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDonutThin: React.FC<LanDonutThinProps>;
export default LanDonutThin;
