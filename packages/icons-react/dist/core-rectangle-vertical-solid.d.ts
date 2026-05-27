import React from 'react';

export interface CoreRectangleVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleVerticalSolid: React.FC<CoreRectangleVerticalSolidProps>;
export default CoreRectangleVerticalSolid;
