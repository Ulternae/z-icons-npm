import React from 'react';

export interface MinaDotsVerticalCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalCircleSolid: React.FC<MinaDotsVerticalCircleSolidProps>;
export default MinaDotsVerticalCircleSolid;
