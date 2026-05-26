import React from 'react';

export interface LanShieldDogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldDogRegular: React.FC<LanShieldDogRegularProps>;
export default LanShieldDogRegular;
