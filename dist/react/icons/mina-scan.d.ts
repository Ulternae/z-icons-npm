import React from 'react';

export interface MinaScanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaScan: React.FC<MinaScanProps>;
export default MinaScan;
