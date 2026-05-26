import React from 'react';

export interface LanMobileRetroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileRetro: React.FC<LanMobileRetroProps>;
export default LanMobileRetro;
