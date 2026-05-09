import React from 'react';

export interface MinaBaseballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBaseball: React.FC<MinaBaseballProps>;
export default MinaBaseball;
