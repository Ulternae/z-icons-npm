import React from 'react';

export interface CoreDollarSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreDollarSign: React.FC<CoreDollarSignProps>;
export default CoreDollarSign;
