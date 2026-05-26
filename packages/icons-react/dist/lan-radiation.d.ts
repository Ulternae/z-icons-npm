import React from 'react';

export interface LanRadiationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadiation: React.FC<LanRadiationProps>;
export default LanRadiation;
