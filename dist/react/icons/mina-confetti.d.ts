import React from 'react';

export interface MinaConfettiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaConfetti: React.FC<MinaConfettiProps>;
export default MinaConfetti;
