import React from 'react';

export interface LanUserAstronautProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserAstronaut: React.FC<LanUserAstronautProps>;
export default LanUserAstronaut;
