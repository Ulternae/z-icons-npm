import React from 'react';

export interface MinaZapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZap: React.FC<MinaZapProps>;
export default MinaZap;
