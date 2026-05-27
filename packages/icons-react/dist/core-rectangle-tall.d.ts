import React from 'react';

export interface CoreRectangleTallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleTall: React.FC<CoreRectangleTallProps>;
export default CoreRectangleTall;
