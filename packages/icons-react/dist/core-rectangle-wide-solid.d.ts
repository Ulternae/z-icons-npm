import React from 'react';

export interface CoreRectangleWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleWideSolid: React.FC<CoreRectangleWideSolidProps>;
export default CoreRectangleWideSolid;
