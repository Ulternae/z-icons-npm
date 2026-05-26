import React from 'react';

export interface LanEarthOceaniaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthOceaniaThin: React.FC<LanEarthOceaniaThinProps>;
export default LanEarthOceaniaThin;
