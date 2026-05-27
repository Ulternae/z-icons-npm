import React from 'react';

export interface CoreRectangleVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleVertical: React.FC<CoreRectangleVerticalProps>;
export default CoreRectangleVertical;
