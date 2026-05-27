import React from 'react';

export interface CoreRectangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleSolid: React.FC<CoreRectangleSolidProps>;
export default CoreRectangleSolid;
