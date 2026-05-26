import React from 'react';

export interface LanFireBurnerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireBurner: React.FC<LanFireBurnerProps>;
export default LanFireBurner;
