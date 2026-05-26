import React from 'react';

export interface LanJugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJugRegular: React.FC<LanJugRegularProps>;
export default LanJugRegular;
