import React from 'react';

export interface LanPersonSeatWindowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSeatWindow: React.FC<LanPersonSeatWindowProps>;
export default LanPersonSeatWindow;
