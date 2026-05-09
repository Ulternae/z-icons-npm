import React from 'react';

export interface MinaLockCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockCircle: React.FC<MinaLockCircleProps>;
export default MinaLockCircle;
