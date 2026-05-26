import React from 'react';

export interface LanDogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDog: React.FC<LanDogProps>;
export default LanDog;
