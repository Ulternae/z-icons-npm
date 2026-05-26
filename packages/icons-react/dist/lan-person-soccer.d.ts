import React from 'react';

export interface LanPersonSoccerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSoccer: React.FC<LanPersonSoccerProps>;
export default LanPersonSoccer;
