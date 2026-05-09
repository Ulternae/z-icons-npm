import React from 'react';

export interface MinaZapOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZapOff: React.FC<MinaZapOffProps>;
export default MinaZapOff;
