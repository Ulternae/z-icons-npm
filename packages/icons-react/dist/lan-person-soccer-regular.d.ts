import React from 'react';

export interface LanPersonSoccerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSoccerRegular: React.FC<LanPersonSoccerRegularProps>;
export default LanPersonSoccerRegular;
