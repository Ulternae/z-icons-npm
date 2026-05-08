import React from 'react';

export interface MinaRectangleVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRectangleVertical: React.FC<MinaRectangleVerticalProps>;
export default MinaRectangleVertical;
