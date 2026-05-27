import React from 'react';

export interface CoreRectangleCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleCodeSolid: React.FC<CoreRectangleCodeSolidProps>;
export default CoreRectangleCodeSolid;
