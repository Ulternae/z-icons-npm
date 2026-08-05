import React from 'react';

export interface LanPersonSnowboardingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSnowboarding(props: LanPersonSnowboardingProps): React.ReactElement;
export default LanPersonSnowboarding;
