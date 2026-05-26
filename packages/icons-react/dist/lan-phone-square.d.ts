import React from 'react';

export interface LanPhoneSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneSquare: React.FC<LanPhoneSquareProps>;
export default LanPhoneSquare;
