import React from 'react';

export interface MinaCornerDownLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCornerDownLeft: React.FC<MinaCornerDownLeftProps>;
export default MinaCornerDownLeft;
