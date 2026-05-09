import React from 'react';

export interface MinaSendProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSend: React.FC<MinaSendProps>;
export default MinaSend;
