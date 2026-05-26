import React from 'react';

export interface LanPersonSnowboardingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSnowboarding: React.FC<LanPersonSnowboardingProps>;
export default LanPersonSnowboarding;
