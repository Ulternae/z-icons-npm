import React from 'react';

export interface LanPersonSnowboardingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSnowboardingRegular: React.FC<LanPersonSnowboardingRegularProps>;
export default LanPersonSnowboardingRegular;
