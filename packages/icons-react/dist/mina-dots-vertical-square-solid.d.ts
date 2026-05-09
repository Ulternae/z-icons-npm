import React from 'react';

export interface MinaDotsVerticalSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalSquareSolid: React.FC<MinaDotsVerticalSquareSolidProps>;
export default MinaDotsVerticalSquareSolid;
