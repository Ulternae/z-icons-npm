import React from 'react';

export interface LanShieldDogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldDog: React.FC<LanShieldDogProps>;
export default LanShieldDog;
