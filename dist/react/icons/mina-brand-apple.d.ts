import React from 'react';

export interface MinaBrandAppleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandApple: React.FC<MinaBrandAppleProps>;
export default MinaBrandApple;
