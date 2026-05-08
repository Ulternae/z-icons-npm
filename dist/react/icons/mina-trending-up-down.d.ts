import React from 'react';

export interface MinaTrendingUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTrendingUpDown: React.FC<MinaTrendingUpDownProps>;
export default MinaTrendingUpDown;
