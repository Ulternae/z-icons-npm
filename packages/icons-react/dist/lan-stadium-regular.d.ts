import React from 'react';

export interface LanStadiumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStadiumRegular: React.FC<LanStadiumRegularProps>;
export default LanStadiumRegular;
