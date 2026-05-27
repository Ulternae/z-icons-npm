import React from 'react';

export interface CoreRectangleCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleCode: React.FC<CoreRectangleCodeProps>;
export default CoreRectangleCode;
