import React from 'react';

export interface MinaSupportProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSupport: React.FC<MinaSupportProps>;
export default MinaSupport;
