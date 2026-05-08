import React from 'react';

export interface MinaCornerLeftDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCornerLeftDown: React.FC<MinaCornerLeftDownProps>;
export default MinaCornerLeftDown;
