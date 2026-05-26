import React from 'react';

export interface LanShieldDogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldDogThin: React.FC<LanShieldDogThinProps>;
export default LanShieldDogThin;
