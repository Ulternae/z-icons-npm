import React from 'react';

export interface LanPassportProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPassport: React.FC<LanPassportProps>;
export default LanPassport;
