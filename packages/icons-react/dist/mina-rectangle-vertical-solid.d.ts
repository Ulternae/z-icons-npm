import React from 'react';

export interface MinaRectangleVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRectangleVerticalSolid: React.FC<MinaRectangleVerticalSolidProps>;
export default MinaRectangleVerticalSolid;
