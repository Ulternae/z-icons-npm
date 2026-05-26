import React from 'react';

export interface LanStadiumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStadium: React.FC<LanStadiumProps>;
export default LanStadium;
