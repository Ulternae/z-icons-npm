import React from 'react';

export interface MinaImageRectangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaImageRectangle: React.FC<MinaImageRectangleProps>;
export default MinaImageRectangle;
