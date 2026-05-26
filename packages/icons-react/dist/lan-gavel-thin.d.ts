import React from 'react';

export interface LanGavelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGavelThin: React.FC<LanGavelThinProps>;
export default LanGavelThin;
