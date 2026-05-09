import React from 'react';

export interface MinaRectangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRectangle: React.FC<MinaRectangleProps>;
export default MinaRectangle;
