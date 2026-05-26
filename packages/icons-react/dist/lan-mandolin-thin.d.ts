import React from 'react';

export interface LanMandolinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMandolinThin: React.FC<LanMandolinThinProps>;
export default LanMandolinThin;
