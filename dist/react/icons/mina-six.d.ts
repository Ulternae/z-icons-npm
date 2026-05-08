import React from 'react';

export interface MinaSixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSix: React.FC<MinaSixProps>;
export default MinaSix;
