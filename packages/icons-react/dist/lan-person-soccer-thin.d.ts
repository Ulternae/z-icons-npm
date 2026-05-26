import React from 'react';

export interface LanPersonSoccerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSoccerThin: React.FC<LanPersonSoccerThinProps>;
export default LanPersonSoccerThin;
