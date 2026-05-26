import React from 'react';

export interface LanMeteorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeteorThin: React.FC<LanMeteorThinProps>;
export default LanMeteorThin;
