import React from 'react';

export interface MinaTrendingDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTrendingDown: React.FC<MinaTrendingDownProps>;
export default MinaTrendingDown;
