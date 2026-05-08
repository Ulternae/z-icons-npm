import React from 'react';

export interface MinaLockSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockSquareSolid: React.FC<MinaLockSquareSolidProps>;
export default MinaLockSquareSolid;
