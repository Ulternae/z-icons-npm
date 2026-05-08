import React from 'react';

export interface MinaDotsVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalSolid: React.FC<MinaDotsVerticalSolidProps>;
export default MinaDotsVerticalSolid;
