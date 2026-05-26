import React from 'react';

export interface LanUserAlienProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserAlien: React.FC<LanUserAlienProps>;
export default LanUserAlien;
