import React from 'react';

export interface MinaSaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSave: React.FC<MinaSaveProps>;
export default MinaSave;
