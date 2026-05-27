import React from 'react';

export interface CoreRectangleTallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleTallSolid: React.FC<CoreRectangleTallSolidProps>;
export default CoreRectangleTallSolid;
