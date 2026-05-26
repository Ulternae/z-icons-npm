import React from 'react';

export interface LanUserShakespeareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserShakespeare: React.FC<LanUserShakespeareProps>;
export default LanUserShakespeare;
