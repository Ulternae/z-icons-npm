import React from 'react';

export interface LanUserVisorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserVisor: React.FC<LanUserVisorProps>;
export default LanUserVisor;
