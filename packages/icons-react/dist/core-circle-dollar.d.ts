import React from 'react';

export interface CoreCircleDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleDollar: React.FC<CoreCircleDollarProps>;
export default CoreCircleDollar;
