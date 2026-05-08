import React from 'react';

export interface MinaFlameProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlame: React.FC<MinaFlameProps>;
export default MinaFlame;
