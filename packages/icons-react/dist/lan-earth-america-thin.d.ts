import React from 'react';

export interface LanEarthAmericaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthAmericaThin: React.FC<LanEarthAmericaThinProps>;
export default LanEarthAmericaThin;
