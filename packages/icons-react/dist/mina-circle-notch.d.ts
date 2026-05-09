import React from 'react';

export interface MinaCircleNotchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCircleNotch: React.FC<MinaCircleNotchProps>;
export default MinaCircleNotch;
