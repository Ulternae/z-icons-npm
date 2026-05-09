import React from 'react';

export interface MinaLockCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockCircleSolid: React.FC<MinaLockCircleSolidProps>;
export default MinaLockCircleSolid;
