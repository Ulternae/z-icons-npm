import React from 'react';

export interface MinaTvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTv: React.FC<MinaTvProps>;
export default MinaTv;
